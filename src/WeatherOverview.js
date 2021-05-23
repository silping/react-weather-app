import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherOverview() {
  return (
    <div>
      <div className="row">
        <h5>Lisbon, clear sky</h5>
        <ReactAnimatedWeather
          icon="SLEET"
          color="#A9FDAC"
          size={62}
          animate={true}
        />
      </div>
      <div className="row">
        <div className="col-6">
          <strong>22ºC | F </strong>
        </div>
        <div className="col-6">
          <ul>
            <li>Max. 22ºC | Min 12ºC</li>
            <li>Humidity: 40%</li>
            <li>Wind speed: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
