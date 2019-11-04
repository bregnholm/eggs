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
        <header>Eggs</header>
        <main>
          <div>
            <span>How many chickens do I want:</span>
            <input name="endGoal" onChange={this.inputField} value={this.state.endGoal} type="number" />
          </div>
          <div>
            <span>Current amount of chickens:</span>
            <input name="currentChickens" onChange={this.inputField} value={this.state.currentChickens} type="number" />
          </div>
          <div>
            <span>Hatching per minute</span>
            <input name="chickensPerMinute" onChange={this.inputField} value={this.state.chickensPerMinute} type="number" />
          </div>
          <div>
            <span>Number of habitats</span>
            <input name="habitats" onChange={this.inputField} value={this.state.habitats} type="number" />
          </div>
          <h3>I still need <u>{this.missingChickens().toLocaleString()}</u> chickens</h3>
          <h3>I should have that in <u>{this.timeUntilDone().daysUntilFinished}</u> days and <u>{this.timeUntilDone().hoursUntilFinished}</u> hours</h3>
        </main>
        <footer></footer>
      </div>
    );
  }
}
export default App;
