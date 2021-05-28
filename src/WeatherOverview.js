import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function WeatherOverview(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherOverview">
        <div className="row">
          <div className="col-12">
            <h5 className="cityName">
              {weatherData.city}, {weatherData.description}
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ReactAnimatedWeather
              className="WeatherIcon"
              icon="SLEET"
              color="#A9FDAC"
              size={62}
              animate={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 temp">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Max. {Math.round(weatherData.maxTemp)}ºC | Min{" "}
                {Math.round(weatherData.minTemp)}ºC
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind speed: {Math.round(weatherData.wind)}/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "51c757e95cb1fdd4bc45100437afbefb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
