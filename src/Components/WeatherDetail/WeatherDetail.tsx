import { Weather } from "../../hooks/useWeather";
import { formatTemperature } from "../../utils";
import "./WeatherDetail.modules.css";

type WeatherDetailProps = {
  weather: Weather;
};

export default function WeatherDetail({ weather }: WeatherDetailProps) {
  return (
    <div className="container_result">
      <h2>{weather.name}</h2>
      <p className="current">{formatTemperature(weather.main.temp)}&deg;C</p>
      <div className="temperatures">
        <p>
          Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span>
        </p>
        <p>
          Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span>
        </p>
      </div>
    </div>
  );
}
