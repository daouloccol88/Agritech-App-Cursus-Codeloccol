"use client";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function LandingMeteoCard({ latitude, longitude }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,windspeed_10m,weather_code&timezone=auto`
        );

        const data = await res.json();
        setWeather(data.current);
      } catch (error) {
        console.log("Error fetching weather:", error);
      }
    }

    fetchWeather();
  }, [latitude, longitude]);

  if (!weather) return <Loader loadedElement={"Météo"} />;

  // Weather code list to conditions
  const getWeatherLabel = (code) => {
    if (code === 0) return "Clear Sky ☀️";
    if ([1, 2, 3].includes(code)) return "Cloudy ☁️";
    if ([51, 61, 80].includes(code)) return "Light Rain 🌧️";
    if ([63, 65, 81].includes(code)) return "Rain ⛈️";
    if ([71, 73, 75].includes(code)) return "Snow ❄️";
    return "Unknown Weather";
  };

  // Choose icon based on weather code
  const getIcon = (code) => {
    if (code === 0) return "bi-sun-fill";
    if ([1, 2, 3].includes(code)) return "bi-cloud-fill";
    if ([61, 63, 65, 80, 81].includes(code)) return "bi-cloud-rain-fill";
    return "bi-cloud";
  };

  const now = new Date();
  const hour = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const day = now.toLocaleDateString([], {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card border-0 bg-yellow p-3 rounded-4">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold">{day}</h5>
        <span className="text-muted">{hour}</span>
      </div>

      <div className="text-center my-3">
        <i
          className={`bi ${getIcon(weather.weather_code)}`}
          style={{ fontSize: "50px" }}
        ></i>
        <h2 className="fw-bold mt-2">{weather.temperature_2m}°C</h2>
        <p className="text-muted">{getWeatherLabel(weather.weather_code)}</p>
      </div>

      <hr />

      <div className="d-flex justify-content-between">
        <small>💧 Humidity: {weather.relative_humidity_2m}%</small>
        <small>🌧 Rain: {weather.precipitation} mm</small>
        <small>💨 Wind: {weather.windspeed_10m} km/h</small>
      </div>
    </div>
  );
}
