import React from 'react';
import './App.css';
import Goals from './Goals';
import Navigation from './Navigation/Navigation';
import GoalsTwo from './GoalsTwo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      endGoal: 0, 
      currentChickens: 0,
      chickensPerMinute: 0,
      habitats: 4,
      activeKey: "#features"
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

  nav = (e) => {
    this.setState(e)
  }

  render() {
    return (
      <div className="App">
        <header>
          <span>Eggs Inc. calculator</span>
          <Navigation activeKey={this.state.activeKey} selected={this.nav}></Navigation>
        </header>
        <main>
         {this.state.activeKey === '#goals' ? <Goals {...this.state}></Goals> : <GoalsTwo></GoalsTwo>}
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
