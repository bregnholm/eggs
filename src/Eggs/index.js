import React from 'react';
import './index.css';
import Goals from './Goals';

class Eggs extends React.Component {
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

  render() {
    return (
      <>
      <header className="eggs">Eggs Inc. calculator</header>
        <main>
          <Goals {...this.state}></Goals>
          <div className="list">
            <span>Chicken goal:</span>
            <input name="endGoal" onChange={this.inputField} value={this.state.endGoal} type="number" pattern="[0-9]*" />
          </div>
          <div className="list">
            <span>Current:</span>
            <input name="currentChickens" onChange={this.inputField} value={this.state.currentChickens} type="number" pattern="[0-9]*" />
          </div>
          <div className="list">
            <span>Hatch pr. min</span>
            <input name="chickensPerMinute" onChange={this.inputField} value={this.state.chickensPerMinute} type="number" pattern="[0-9]*" />
          </div>
          <div className="list">
            <span>Habitats</span>
            <input name="habitats" onChange={this.inputField} value={this.state.habitats} type="number" pattern="[0-9]*" />
          </div>
        </main>
        </>
    );
  }
}
export default Eggs;
