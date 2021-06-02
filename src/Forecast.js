import React from "react";
//import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Tuesday</div>
          <WeatherIcon code="01d" size={40} />
          <span className="Forecast-temp-max">23ºC </span>{" "}
          <span className="Forecast-temp-min">12ºC</span>
        </div>
      </div>
    </div>
  );
}
