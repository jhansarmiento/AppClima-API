import "./App.modules.css";
import Form from "./Components/Form/Form";
import useWeather from "./hooks/useWeather";
import WeatherDetail from "./Components/WeatherDetail/WeatherDetail";
import Spinner from "./Components/Spinner/Spinner";
import Alert from "./Components/Alert/Alert";

function App() {
  const { weather, loading, notFound, fecthWeather, hasWeatherData } =
    useWeather();

  return (
    <>
      <h1 className="title">Buscador De Clima</h1>
      <div className="container">
        <Form fecthWeather={fecthWeather} />
        {loading && <Spinner />}
        {notFound && <Alert>Ciudad No Encontrada</Alert>}
        {hasWeatherData && <WeatherDetail weather={weather} />}
      </div>
    </>
  );
}

export default App;
