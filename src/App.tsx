import "./App.modules.css";
import Form from "./Form/Form";
import useWeather from "./hooks/useWeather";
import WeatherDetail from "./WeatherDetail/WeatherDetail";

function App() {

  const { weather, fecthWeather } = useWeather()

  return (
    <>
      <h1 className="title">Buscador De Clima</h1>
      <div className="container">
        <Form 
          fecthWeather={fecthWeather}
        />
        <WeatherDetail 
          weather={weather}
        />
      </div>
    </>
  );
}

export default App;
