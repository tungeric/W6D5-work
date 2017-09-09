import React from 'react';
import ReactDOM from 'react-dom';


class Weather extends React.Component {
  constructor() {
    super();
    this.state = { weather: null };
    this.getWeather = this.getWeather.bind(this);
  }
  componentDidMount() { navigator.geolocation.getCurrentPosition(this.getWeather); }

  getWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    url += `lat=${lat}`;
    url += `&lon=${lon}`;
    let apikey ="75f1c63652188e395579829e616efca0";
    url += `&APPID=${apikey}`;

    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = () => {
      if (request.status === 200 && request.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(request.responseText);
        this.setState({weather: data});
      }
    };
    request.send();

  }

  render() {
    let content = <div>Loading...</div>;
    if(this.state.weather) {
      content = <div>
                  <ul>
                  <li>Current city: {this.state.weather.name} </li>
                  <li>Current temperature: {Math.round(this.state.weather.main.temp - 273)} deg. C </li>
                  </ul>
                </div>;
    }
    return (
      <div className="weather">
        <h1>Weather</h1>
        <div className = "weather-content">{content}</div>
      </div>
    );
  }
}

export default Weather;
