import "./App.css";
import Date from "./Date";
import SearchForm from "./SearchForm";
import WeatherOverview from "./WeatherOverview";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-content">
        <Date />
        <SearchForm />
        <WeatherOverview />
        <Forecast />
      </header>
      <footer>
        <a href="https://github.com/miss-ping/react-weather-app">Open source</a>{" "}
        coded by Sílvia Ping
      </footer>
    </div>
  );
}

export default App;
