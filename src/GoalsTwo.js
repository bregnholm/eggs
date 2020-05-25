import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import converter from 'number-to-words';

class GoalsTwo extends React.Component {
    timeUntilDone() {
    const oneDay = 1000 * 60 * 60 * 24;
    const milliseconds = (this.missingChickens() / this.chickensHatchingPerMinte()) * (1000 * 60);
    const daysUntilFinished = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hoursUntilFinished = Math.floor(milliseconds % oneDay / (1000 * 60 * 60));
    const minutesUntilFinished = Math.floor(milliseconds % (1000 * 60 * 60) / (1000 * 60));

    return {
      daysUntilFinished,
      hoursUntilFinished, 
      minutesUntilFinished
    }
  }

  missingChickens() {
    return (this.props.endGoal - this.props.currentChickens);
  }

  missingChickensInPercentage() {
      return (this.props.currentChickens / this.props.endGoal) * 100;
  }

  chickensHatchingPerMinte() {
    return (this.props.chickensPerMinute * this.props.habitats);
  }

  render() {
    const number = Math.pow(7, 200).toLocaleString();
    console.log(number);
    // const {daysUntilFinished, hoursUntilFinished, minutesUntilFinished} = this.timeUntilDone();
    // const missingChicken = this.missingChickens()
    return (
          <div className="goals">
            <h3>Eggs missing</h3>
            <h1>{converter.toWords(1111111111111111)}</h1>
          </div>
    );
  }
}
export default GoalsTwo;
