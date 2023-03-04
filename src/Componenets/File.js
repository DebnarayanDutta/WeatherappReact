import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import { useNavigate } from "react-router";
import { useWeatherData } from "../context/weatherContext";
import "./File.css";

const Info = () => {
  const [search, setSearch] = useState("");
  const { setWeatherData } = useWeatherData();

  const navigate = useNavigate();

  const searchPressed = async () => {
    const data = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=cff1928fce494c48852131529230403&q=${search}`
    );
    const result = await data.json();
    setWeatherData(result);
    navigate("/weatherinfo");
  };

  return (
    <>
      <div className="search-div">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="enter city name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>
    </>
  );
};

export default Info;
