//lets use jsx and custom css in this component, no react-bootstrap components
import '../css/Weather.css';
import {useRef, useState, useEffect} from 'react';

function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [weatherFocus, setWeatherFocus] = useState('');
  const [city, setCity] = useState('Pyongyang');
  const [temp, setTemp] = useState(false);

  const weatherPath = 'http://192.168.12.121:3500/weather';

  useEffect(() => {
    getWeather();
  }, []);

  console.log(weatherData);
  const getWeather = () => {
    fetch(`${weatherPath}/${city}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
  };

  return (
    <>
      <div className="app">
        <div className="weather-app">
          <input 
            onFocus={() => setWeatherFocus('focus')}
            onBlur={() => setWeatherFocus('')} 
            type="text" className="weather-app-search" 
            spellCheck="false" placeholder="Enter city name and press Enter ..." 
          />
          {!weatherData ? <div className="lds-ripple"><div></div><div></div></div> :
            <>
              <div className={`weather-app-city ${weatherFocus}`}>
                {weatherData.name}, {weatherData.sys.country}
              </div>
              <div className={`weather-app-temperature ${weatherFocus}`}>
                {Math.round(weatherData.main.temp)} &deg;C
              </div>
              <div className={`weather-app-cloudy ${weatherFocus}`}>
                {weatherData.weather[0].description}
              </div>
              <div className="weather-icon">
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0]['icon']}@2x.png`} />
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default Weather;
