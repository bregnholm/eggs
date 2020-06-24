import React from 'react';
import './index.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import holderjs from 'holderjs';

import Carousel from 'react-bootstrap/Carousel';
import moment from 'moment';
import "holderjs";

class Walks extends React.Component {
  constructor(props){
    super(props);

//    const moment = require("moment");
    const fromMoment = moment([2020, 0]);
    const daysthisYear = moment([2021, 0]).diff(fromMoment, 'days');
    const daysPassed = moment().diff(fromMoment, 'days');
    


    this.state = {
      endGoal: 3, 
      currentAverage: 2.4,
      chickensPerMinute: 0,
      habitats: 4,
      daysthisYear,
      daysPassed
    }
  }

  componentDidMount(nextProps) {
    for(var i =0; i < localStorage.length; i++){
      const currentKey = localStorage.key(i);
      if(currentKey.includes('walks.')) {
        this.setState({[currentKey.split('walks.').pop()]: localStorage.getItem(currentKey)});
      }
    }
  }
  inputField = (e) => {
    this.setState({[e.target.name]: Math.round(e.target.value)});
    localStorage.setItem(`walks.${e.target.name}`, e.target.value);
  }

  render() {
    const iHaveWalked = this.state.currentAverage * this.state.daysPassed;
    const totalKm = this.state.endGoal * this.state.daysthisYear;
    const youNeed = (totalKm - iHaveWalked) / (this.state.daysthisYear - this.state.daysPassed);

    return (
      <>
      <header className="walks">Walk Motivator</header>
        <main>
        <Carousel>
        <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Almost There&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>You only need to walk {youNeed.toFixed(2)}km today :D </h3>
      <p>{iHaveWalked}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

          <h4>GOALS</h4>
          <div className="list">
            <span>Walk per day:</span>
            <input name="endGoal" onChange={this.inputField} value={this.state.endGoal} type="number" pattern="[0-9]*" />
          </div>
          <hr></hr>
          <div className="list">
            <span>KM in a year:</span>
            <span>{totalKm}km</span>
          </div>
          <ProgressBar now={( this.state.currentAverage / this.state.endGoal) * 100} />
          <div className="list">
            <span>Current:</span>
            <input name="currentAverage" onChange={this.inputField} value={this.state.currentAverage} type="number" pattern="[0-9]*" />
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
export default Walks;