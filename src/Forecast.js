import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-3">
        <small>Monday</small>
        <ReactAnimatedWeather
          icon="SLEET"
          color="#A9FDAC"
          size={30}
          animate={true}
        />
        <small>23ºC | 12ºC</small>
      </div>
    </div>
  );
}
