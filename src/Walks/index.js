import React from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'

import moment from 'moment';
import "holderjs";
import Goals from './Goals';

class Walks extends React.Component {
  constructor(props){
    super(props);

    const fromMoment = moment([2020, 0]);
    const daysthisYear = moment([2021, 0]).diff(fromMoment, 'days');
    const daysPassed = moment().diff(fromMoment, 'days');
    
    this.state = {
      endGoal: 3000, 
      currentAverage: 2400,
      daysthisYear,
      daysPassed,
      goalsOpen: false, walks: [], fromMoment
    }
  }


  componentDidMount(nextProps) {
    this.update();
  }

  goalsOpen = () => {
    this.setState({ goalsOpen: !this.state.goalsOpen })
  }


  fullwalks = () => {
    const walksfull = [];

    const { fromMoment, daysPassed, currentAverage, walks = [] } = this.state;
    const makeDay = fromMoment.clone();

    for (let day = 0; day < daysPassed; day++) {
        const momentDay = makeDay.format('Y-MM-DD');
        const curr = walks.find(({date}) => momentDay === date);
        const push = { date: momentDay, meters: curr ? curr.meters : currentAverage, auto: !curr}
        walksfull.push(push);
        makeDay.add(1, 'd');
    }

    return walksfull;
}


  update = () => {
    for(var i =0; i < localStorage.length; i++){
      const currentKey = localStorage.key(i);
      if(currentKey.includes('walkative.')) {
        this.setState({[currentKey.split('walkative.').pop()]: JSON.parse(localStorage.getItem(currentKey))});
      }
    }
  }

  render() {
    const walkedSoFar = this.fullwalks().reduce((prev, curr) => (prev.meters || prev) + curr.meters);
    
    const {daysPassed, endGoal, daysthisYear, goalsOpen} = this.state;

    const currentAverage = ((walkedSoFar) / (daysPassed)) / 1000;
    const walkedInTotalIfKept = ((currentAverage * (daysthisYear - daysPassed)) + walkedSoFar) / 1000;

    const iHaveWalked = (currentAverage * daysPassed) / 1000;
    const totalKm = (endGoal * daysthisYear) / 1000;
    const youNeed = (totalKm - iHaveWalked) / (daysthisYear - daysPassed);
    const shouldHaveBeen = endGoal / 1000 * daysPassed;
    const percentageTotal = iHaveWalked / totalKm * 100;
    const percentageAvr = currentAverage / endGoal * 100;
    const reached = iHaveWalked < shouldHaveBeen;

    return (
      <>
      <header className="walks">
        Walk Motivator
        <Button onClick={this.goalsOpen} variant="success">{goalsOpen ? '-' : '+'}</Button>
        </header>

        <main>
          <Goals open={goalsOpen} update={this.update}/>
          <Carousel controls="false">
            <Carousel.Item>
              <div className="box">
                <Carousel.Caption>
                  <h2>You have walked <span className={reached && 'notReached'}>{walkedSoFar / 1000} km</span> this year</h2>
                  <h4>The goal is <span>{shouldHaveBeen} km</span></h4>
                  <h2>That would be <span className={reached && 'notReached'}>{walkedInTotalIfKept.toFixed(2)} km</span> in a year</h2>
                  <h4>Walk <span>{totalKm} km</span> this year!</h4>
                  <h2>You still need to walk <span  className={totalKm < iHaveWalked && 'notReached'}>{(totalKm - iHaveWalked).toFixed(2)}km</span> this year</h2>
                  <ProgressBar variant='success' now={percentageTotal} />
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box">
                <Carousel.Caption>
                  <h2>The current average is <span className={reached && 'notReached'}>{currentAverage.toFixed(2)} km</span> per day</h2>
                  <h4>The goal is <span>{endGoal / 1000} km</span> per day</h4>

                  <h2>Want to succeed?</h2>
                  <h4>Start walking <span>{youNeed.toFixed(2)} km</span> everyday</h4>

                  <h2>You are so close!</h2>
                  <ProgressBar variant='success' now={percentageAvr} />

                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </main>
        </>
    );
  }
}
export default Walks;