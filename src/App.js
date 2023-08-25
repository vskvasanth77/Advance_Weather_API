import "./App.css";
import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Time from "./components/Time";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";

import getFormattedWeatherData from "./service/WeatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "mumbai" });
    console.log(data);
  };

  fetchWeather();
  console.log("im visible");
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Header />
      <Input />
      <Time />
      <Temperature />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
