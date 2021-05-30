import "./App.css";
import WeatherOverview from "./WeatherOverview";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-content">
          <WeatherOverview defaultCity="Lisbon" />
          <Forecast />
        </header>
        <footer>
          <a href="https://github.com/miss-ping/react-weather-app">
            Open source
          </a>{" "}
          coded by Sílvia Ping
        </footer>
      </div>
    </div>
  );
}

export default App;
