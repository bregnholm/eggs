import React from 'react';
import './index.css';

class Goals extends React.Component {
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

  missingChickens(props) {
    return (this.props.endGoal - this.props.currentChickens);
  } 

  chickensHatchingPerMinte() {
    return (this.props.chickensPerMinute * this.props.habitats);
  }

  render() {
      console.log(this.props);
    const {daysUntilFinished, hoursUntilFinished, minutesUntilFinished} = this.timeUntilDone();
    const missingChicken = this.missingChickens()
    return (
          <div className="goals">
            <h3>Chickens remaining</h3>
            <h1>{missingChicken.toLocaleString()}</h1>
            <h3>Goal reached in</h3>
            <h2>
              <span>{daysUntilFinished}</span> days, <span>{hoursUntilFinished}</span> hours and <span>{minutesUntilFinished}</span> minutes</h2>
          </div>
    );
  }
}
export default Goals;
