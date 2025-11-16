"use client";

import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import UpperSection from "@/components/UpperSection";
import Loader from "@/components/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

export default function page() {
  const [locationName, setLocationName] = useState("Position inconnue");
  const [coords, setCoords] = useState({ lat: 13.5127, lon: 2.1129 });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---- Fetch function ----
  const fetchWeather = async (latitude, longitude) => {
    setLoading(true);

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,precipitation,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
    );

    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  // ---- Get user geolocation ----
  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setCoords({ lat, lon });

        // Optional reverse-geocoding for name:
        const geo = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        ).then((r) => r.json());

        setLocationName(geo.address.city || geo.address.country);
        fetchWeather(lat, lon);
      },
      () => alert("Please enable location access.")
    );
  };

  useEffect(() => {
    fetchWeather(coords.lat, coords.lon);
  }, []);

  if (loading || !data)
    return (
      <div>
        <section className="mb-5 mt-5">
          <UpperSection actualPage={"Météo"} />
        </section>
        <Loader loadedElement={"Météo"} />
      </div>
    );

  // 1. Get current ISO hour string
  const nowISO = new Date().toISOString().slice(0, 13); // "2025-01-16T18"

  // 2. Find where this hour appears in the API hourly array
  const currentIndex = data.hourly.time.findIndex((t) => t.startsWith(nowISO));

  // 3. Slice the next 6 hours
  const next6HoursIndex = data.hourly.time.slice(
    currentIndex,
    currentIndex + 6
  );
  const hourlyTemp = data.hourly.temperature_2m.slice(0, 6);
  const hourlyHumidity = data.hourly.relativehumidity_2m.slice(0, 6);
  const hourlyWind = data.hourly.wind_speed_10m.slice(0, 6);

  const tempChartData = {
    labels: next6HoursIndex.map((t) => t.substring(11, 16)),
    datasets: [
      {
        label: "Temperature °C",
        data: hourlyTemp,
        tension: 0.4,
        borderColor: "red",
        pointRadius: 6,
      },
    ],
  };

  const humidChartData = {
    labels: next6HoursIndex.map((t) => t.substring(11, 16)),
    datasets: [
      {
        label: "Humidity %",
        data: hourlyHumidity,
        backgroundColor: "#8bb4f7", // 👈 bar color
        borderColor: "darkblue",
      },
    ],
  };

  // WEATHER CODE to icon map
  const weatherIcons = {
    0: "☀️",
    1: "🌤",
    2: "⛅",
    3: "☁️",
    45: "🌫️",
    61: "🌧",
    71: "❄️",
    95: "⛈",
  };

  return (
    <div>
      <section className="mb-5 mt-5">
        <UpperSection actualPage={"Météo"} />
      </section>
      <div className="container p-4 shadow-lg rounded bg-light mt-3">
        {/* -------- LOCATION SECTION -------- */}
        <div className="d-flex justify-content-between mb-4">
          <h3>{locationName}</h3>
          <button className="btn btn-success" onClick={detectLocation}>
            <i className="bi bi-geo-alt-fill"></i> Détectez ma position
          </button>
        </div>

        {/* -------- CURRENT WEATHER SECTION -------- */}
        <div className="row g-3 border shadow-sm rounded p-5 bg-white">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between">
              <div className="my-auto ">
                <h1>{data.current_weather.temperature}°C</h1>
                <p>Temperature</p>
              </div>
              <div className="ms-5">
                <div>
                  <span className="fw-bold fs-5">
                    💧 {data.hourly.relativehumidity_2m[0]}%
                  </span>
                  <span> Humidity</span>
                </div>
                <div>
                  <span className="fw-bold fs-5">
                    ☔ {data.hourly.precipitation[0]} mm
                  </span>
                  <span> Precipitation</span>
                </div>
                <div>
                  <span className="fw-bold fs-5">
                    💨 {data.current_weather.windspeed} km/h
                  </span>
                  <span> Wind</span>
                </div>
              </div>
            </div>

            <div className="me-5 text-center my-auto ms-3">
              <h5>
                🕒 {new Date(data.current_weather.time).toLocaleTimeString()}
              </h5>
              <p>Time</p>
            </div>
          </div>

          <div className="col-md-2 text-center"></div>
        </div>

        {/* -------- NEXT 6 HOURS VISUALIZATION -------- */}
        <h4 className="mt-5 mb-3">
          Infos météorologiques des 6 prochaines heures
        </h4>

        <div className="row">
          <p className="d-inline-flex gap-1">
            <a
              className="btn bg-green text-white p-4"
              data-bs-toggle="collapse"
              href="#températureCollapse"
              role="button"
              aria-expanded="true"
              aria-controls="températureCollapse"
            >
              <i className="bi bi-thermometer-half"></i> Température
            </a>

            <button
              className="btn bg-green text-white p-4 ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#ventCollapse"
              aria-expanded="false"
              aria-controls="ventCollapse"
            >
              <i className="bi bi-wind"></i> Vent
            </button>

            <button
              className="btn bg-green text-white p-4 ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#précipitationCollapse"
              aria-expanded="false"
              aria-controls="précipitationCollapse"
            >
              <i className="bi bi-cloud-drizzle-fill"></i> Précipitation
            </button>
          </p>

          <div id="myCollapseGroup">
            <div
              className="collapse show"
              id="températureCollapse"
              data-bs-parent="#myCollapseGroup"
            >
              <h3>Température des 6 prochaines heures</h3>
              <Line data={tempChartData} height={"200px"} />
            </div>

            <div
              className="collapse"
              id="ventCollapse"
              data-bs-parent="#myCollapseGroup"
            >
              <h3>Vent des 6 prochaines heures</h3>
              <div className="row">
                {hourlyWind.map((w, i) => (
                  <div key={i} className="col-2 py-4 fw-bold">
                    ➤ {w} km/h
                  </div>
                ))}
              </div>
            </div>

            <div
              className="collapse"
              id="précipitationCollapse"
              data-bs-parent="#myCollapseGroup"
            >
              <h3>Précipitations des 6 prochaines heures</h3>
              <Bar data={humidChartData} height={"80px"} />
            </div>
          </div>
        </div>

        {/* -------- NEXT 6 DAYS -------- */}
        <div className="mt-4 row">
          {data.daily.time.slice(0, 6).map((day, index) => (
            <div
              key={day}
              className="col-2 text-center border rounded p-3 bg-white"
            >
              <p>
                {new Date(day).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>
              <h3>{weatherIcons[data.daily.weathercode[index]] || "🌥"}</h3>
              <p className="fw-bold">
                {data.daily.temperature_2m_max[index]}°C
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
