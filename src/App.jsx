import Humidity from "./components/Humidity";
import MainWeather from "./components/MainWeather";
import SearchBar from "./components/SearchBar";
import WindSpeed from "./components/WindSpeed";
import getWeatherData from "./services/weather";

import Clouds from "./images/clouds.png";
import Rain from "./images/rain.png";
import Clear from "./images/clear.png";
import Snow from "./images/snow.png";
import Drizzle from "./images/drizzle.png";
import Mist from "./images/mist.png";

import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("Makati");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function loadWeather() {
      const data = await getWeatherData(query);
      setWeather(data);
      console.log(data);
    }
    loadWeather();
  }, [query]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-b from-blue-100  to-white">
      <div
        className="w-full max-w-[300px]  lg:max-w-[388px] bg-linear-to-b from-slate-400 to-slate-600


 p-6 rounded-xl shadow-lg"
      >
        <SearchBar onSearch={setQuery} />

        {weather && (
          <>
            <MainWeather
              city={weather.name}
              temp={weather.main.temp}
              country={weather.sys.country}
              img={
                weather.weather[0].main === "Clouds"
                  ? Clouds
                  : weather.weather[0].main === "Rain"
                  ? Rain
                  : weather.weather[0].main === "Clear"
                  ? Clear
                  : weather.weather[0].main === "Snow"
                  ? Snow
                  : weather.weather[0].main === "Drizzle"
                  ? Drizzle
                  : weather.weather[0].main === "Mist"
                  ? Mist
                  : Clouds // fallback
              }
            />

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
