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
      <small>Open source coded by Sílvia Ping</small>
    </div>
  );
}

export default App;
