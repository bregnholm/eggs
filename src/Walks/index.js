import React from 'react';
import './index.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image'
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
          <Carousel controls="false">
            <Carousel.Item>
              <div className="box">
                <Carousel.Caption>
                  <h2>Walk {totalKm}km this year!</h2>
                  <h3>So far you have walked {iHaveWalked}km</h3>
                  </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>


          <h4>GOAL</h4>
          <div className="list">
            <span></span>
          </div>
          <div className="list">
            <span>Walk per day:</span>
            <input name="endGoal" onChange={this.inputField} value={this.state.endGoal} type="number" pattern="[0-9]*" />
          </div>
          <hr></hr>
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