import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      endGoal: 0, 
      currentChickens: 0,
      chickensPerMinute: 0,
      habitats: 4
    }
  }

  componentDidMount(nextProps) {
    for(var i =0; i < localStorage.length; i++){
      const currentKey = localStorage.key(i);
      if(currentKey.includes('eggs.')) {
        this.setState({[currentKey.split('eggs.').pop()]: localStorage.getItem(currentKey)});
      }
    }
  }
  inputField = (e) => {
    this.setState({[e.target.name]: Math.round(e.target.value)});
    localStorage.setItem(`eggs.${e.target.name}`, e.target.value);
  }

  timeUntilDone() {
    const oneDay = 1000 * 60 * 60 * 24;
    const milliseconds = (this.missingChickens() / this.chickensHatchingPerMinte()) * (1000 * 60);
    const daysUntilFinished = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hoursUntilFinished = Math.floor(milliseconds % oneDay / (1000 * 60 * 60));

    return {
      daysUntilFinished,
      hoursUntilFinished
    }
  }

  missingChickens() {
    return (this.state.endGoal - this.state.currentChickens);
  } 

  chickensHatchingPerMinte() {
    return (this.state.chickensPerMinute * this.state.habitats);
  }

  render() {
    return (
      <div className="App">
        <header>Eggs Inc. calculator</header>
        <main>
          <div className="goals">
            <h3>Chickens remaining</h3>
            <h1>{this.missingChickens().toLocaleString()}</h1>
            <h3>Goal reached in</h3>
            <h2>
              <span>{this.timeUntilDone().daysUntilFinished}</span> days and <span>{this.timeUntilDone().hoursUntilFinished}</span> hours</h2>
          </div>
          <div>
            <span>Chicken goal:</span>
            <input name="endGoal" onChange={this.inputField} value={this.state.endGoal} type="number" pattern="[0-9]*" />
          </div>
          <div>
            <span>Current:</span>
            <input name="currentChickens" onChange={this.inputField} value={this.state.currentChickens} type="number" pattern="[0-9]*" />
          </div>
          <div>
            <span>Hatch pr. min</span>
            <input name="chickensPerMinute" onChange={this.inputField} value={this.state.chickensPerMinute} type="number" pattern="[0-9]*" />
          </div>
          <div>
            <span>Habitats</span>
            <input name="habitats" onChange={this.inputField} value={this.state.habitats} type="number" pattern="[0-9]*" />
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}
export default App;
