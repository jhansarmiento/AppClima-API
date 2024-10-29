import "./App.modules.css";
import Form from "./Components/Form/Form";
import useWeather from "./hooks/useWeather";
import WeatherDetail from "./Components/WeatherDetail/WeatherDetail";
import Spinner from "./Components/Spinner/Spinner";

function App() {

  const { weather, loading, fecthWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className="title">Buscador De Clima</h1>
      <div className="container">
        <Form 
          fecthWeather={fecthWeather}
        />
        {loading && <Spinner />}
        {hasWeatherData &&
          <WeatherDetail 
            weather={weather}
          /> 
        }
      </div>
    </>
  );
}

export default App;
