import React, { useState } from 'react';
import './App.css'; 

const apiKey = "e945998b15f9c864b432b026a1255bc3";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const getWeather = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
      setCity("");
    }
  };


  return (
    <div className="App">
      <input
        type="text"
        value={city}
        placeholder="enter city..."
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={getWeather}
        required
      />
      {typeof weather.main === "undefined" ? (
        <p>Enter a Location...</p>
      ) : (
        <div>
          <h3>
            {weather.name},{weather.sys.country}
          </h3>
          <p className="temp">{Math.round(weather.main.temp)}&deg;F</p>
          <p className="weather">{weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
   }

   export default App;
