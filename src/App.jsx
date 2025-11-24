import Humidity from "./components/Humidity";
import MainWeather from "./components/MainWeather";
import SearchBar from "./components/SearchBar";
import WindSpeed from "./components/WindSpeed";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-linear-to-b from-green-100 to-green-300 p-6 rounded-xl shadow-lg">
        <SearchBar />

        <MainWeather />

        <div className="flex justify-evenly items-center mt-6">
          <Humidity />
          <WindSpeed />
        </div>
      </div>
    </div>
  );
}

export default App;
