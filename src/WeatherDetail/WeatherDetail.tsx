import { Weather } from "../hooks/useWeather";
import "./WeatherDetail.module.css";

type WeatherDetailProps = {
  weather: Weather
}

export default function WeatherDetail({weather} : WeatherDetailProps) {
  return (
  <div>
    <h2>Clima De: </h2>
  </div>)
}
