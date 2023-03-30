import React from "react";
import { useSearchParams } from "react-router-dom";
import { useWeatherData } from "../context/weatherContext";
import "./WeatherInfo.css";

const WeatherInfo = (props) => {
  const { weatherData } = useWeatherData();
    console.log(weatherData)
  return (
    <>
    <div className="info-div">
      <h1>Weather Info</h1>

      <div className="location-info">

      <ul>

        <li>City Name: {weatherData.location.name} 🏙️</li>
        <li>State Name: {weatherData.location.region}</li>
        <li>Latitude: {weatherData.location.lat} 🌐</li>
        <li>Temperature: {weatherData.current.temp_c} 🌡️</li>
        <li>Feels Like: {weatherData.current.feelslike_c} </li>
        <li>Precipitation: {weatherData.current.precip_mm} 💧</li>
        <li>Pressure: {weatherData.current.pressure_mb}</li>
        <li>Humididty: {weatherData.current.humidity} 😰</li>
        <li>Wind Speed: {weatherData.current.wind_kph} 🎏</li>
        <li>Visibility: {weatherData.current.vis_km} 👀</li>
        <li>Local Time: {weatherData.location.localtime} 🕒</li>
        
      </ul>
      </div>


      </div>
    </>
  );
};

export default WeatherInfo;
