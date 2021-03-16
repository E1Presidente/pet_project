//lets use jsx and custom css in this component, no react-bootstrap components
import '../css/Weather.css';
import {useState, useEffect} from 'react';

function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [weatherFocus, setWeatherFocus] = useState('');
  const [city, setCity] = useState('Pyongyang');

  const weatherPath = 'http://localhost:3500/weather';

  useEffect(() => {
    fetch(`${weatherPath}/${city}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
  }, [city]);

  const keyHandler = event => {
    if (event.key === 'Enter') {
      setWeatherData(null);
      setCity(event.target.value);
      event.target.value = null;
    }
  };

  const weatherRender = () => {
    if (weatherData.message) {
      return <div className={`weather-app-city ${weatherFocus}`}>{weatherData.message.toUpperCase()}</div>;
    } else {
      return (
        <>
          <div className={`weather-app-city ${weatherFocus}`}>
            {weatherData.name}, {weatherData.sys.country}
          </div>
          <div className={`weather-app-temperature ${weatherFocus}`}>
            {Math.round(weatherData.main.temp)}&deg;C
          </div>
          <div className={`weather-app-cloudy ${weatherFocus}`}>
            {weatherData.weather[0].description}
          </div>
          <div className="weather-icon">
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0]['icon']}@2x.png`} alt="" />
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="app">
        <div className="weather-app">
          <input 
            onFocus={() => setWeatherFocus('focus')}
            onBlur={() => setWeatherFocus('')}
            onKeyDown={keyHandler} 
            type="text" className="weather-app-search" 
            spellCheck="false" placeholder="Enter city name and press Enter ..." 
          />
          {!weatherData ? 
            <div className="lds-ripple"><div></div><div></div></div> : 
            weatherRender()
          }
        </div>
      </div>
    </>
  );
}

export default Weather;
