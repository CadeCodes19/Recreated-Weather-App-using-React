import Humidity from "./components/Humidity";
import MainWeather from "./components/MainWeather";
import SearchBar from "./components/SearchBar";
import WindSpeed from "./components/WindSpeed";
import getWeatherData from "./services/weather";

import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("Makati");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function loadWeather() {
      const data = await getWeatherData(query);
      setWeather(data);
    }
    loadWeather();
  }, [query]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-b from-slate-200 via-slate-950 to-slate-200">
      <div className="w-full max-w-[300px]  lg:max-w-[388px] bg-linear-to-b from-green-100 to-green-300 p-6 rounded-xl shadow-lg">
        <SearchBar onSearch={setQuery} />

        {weather && (
          <>
            <MainWeather city={weather.name} temp={weather.main.temp} />

            <div className="flex justify-evenly items-center mt-6">
              <Humidity humid={weather.main.humidity} />
              <WindSpeed windSpeed={weather.wind.speed} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
