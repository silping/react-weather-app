import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "51c757e95cb1fdd4bc45100437afbefb";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
