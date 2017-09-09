import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
    this.intervalHandle = 0;
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() { this.intervalHandle = setInterval(this.tick, 1000); }
  componentWillUnMount() {
    clearInterval(this.intervalHandle);
    this.intervalHandle = 0;
  }

  render () {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let date = this.state.time.toDateString();
    if(hours < 10) hours = "0"+hours;
    if(minutes < 10) minutes = "0"+minutes;
    if(seconds < 10) seconds = "0"+seconds;
    return (
      <div>
        <h1>Clock</h1>
          <div className="clock">
            <ul className = "clock-ul">
              <p>Time: </p>
              <p>{hours}:{minutes}:{seconds} PDT</p>
            </ul>
            <ul className = "clock-ul">
              <p>Date: </p>
              <p>{date}</p>
            </ul>
          </div>
      </div>
    );
  }
}

export default Clock;
