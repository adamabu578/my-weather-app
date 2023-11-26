import React from "react";
import "./WeatherApp.css";

import searchImage from "../Assets/search.png";
import drizzle from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity_icon.png";
import wind_icon from "../Assets/wind_icon.png";

function WeatherApp() {
  let api_key = "2c2557fa985bb9bdcfc7f571538b2e15";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units = Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temperature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search"></input>
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={searchImage} alt="" style={{ width: "20px" }} />
        </div>
      </div>
      <div className="weather-image">
        <img src={drizzle} alt="" />
      </div>
      <div className="weather-temp">24&deg;C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
