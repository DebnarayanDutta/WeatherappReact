import React from "react";
import "./App.css";
import Info from "./Componenets/File";
import WeatherInfo from "./Componenets/WeatherInfo";
import { Routes, Route } from "react-router-dom";
import { WeatherProvider } from "./context/weatherContext";

function App() {
  return (
    <div>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/weatherinfo" element={<WeatherInfo />} />
        </Routes>
      </WeatherProvider>
    </div>
  );
}

export default App;
