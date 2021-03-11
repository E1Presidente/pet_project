//lets use jsx and custom css in this component, no react-bootstrap components
import '../css/Weather.css';
import {useState} from 'react';

function Weather() {

  // const [weather, setweather] = 

  const getWeather = () => {
    fetch('http://192.168.12.121:3500/weather')
      // .then(response => response.json())
      // .then(data => )
  }

  return (
    <>
      <div className="app">
        <div className="weather-app">
          <input onBlur={() => console.log('dsdasdsdas')} onFocus={() => console.log('asdas')} type="text" className="weather-app-search" spellCheck="false" placeholder="Enter city name and press Enter ..." />
          <div className="weather-app-city">
            <p>Kharkiv, UA</p>
          </div>
          <div className="weather-app-temperature">
            <p>25 &degC;</p>
          </div>
          <div className="weather-app-cloudy">
            <p>Sunny</p>
          </div>
          <div className="weather-icon" />
        </div>
      </div>
    </>
  );
}

export default Weather;
