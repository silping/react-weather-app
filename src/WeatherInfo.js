import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-12">
          <h5>
            <strong>{props.data.city}</strong>, {props.data.description}
          </h5>
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>

      <div className="row">
        <div className="col-6 temp">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Max. {Math.round(props.data.maxTemp)}ºC | Min{" "}
              {Math.round(props.data.minTemp)}ºC
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {Math.round(props.data.wind)}/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
