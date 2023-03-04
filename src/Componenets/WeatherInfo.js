import React from "react";
import { useSearchParams } from "react-router-dom";
import { useWeatherData } from "../context/weatherContext";

const WeatherInfo = (props) => {
  const { weatherData } = useWeatherData();
    console.log(weatherData)
  return (
    <>
      <h1>Weather Info</h1>

      <ul>
        <li>{weatherData.location.name}</li>
        <li>{weatherData.current.temp_c}</li>
        <li>{weatherData.current.condition.text}</li>
        <li>{weatherData.current.condition.icon}</li>

      </ul>
    </>
  );
};

export default WeatherInfo;
