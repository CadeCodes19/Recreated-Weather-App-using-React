import clear from "../images/clear.png";

function MainWeather({ temp, city }) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <img className=" w-24 md:w-40 lg:w-56" src={clear} alt="Weather" />
      <h1 className="text-5xl font-semibold md:text-4xl lg:text-7xl mt-4">
        {Math.floor(temp)}°C
      </h1>
      <p className="text-lg md:text-xl mt-2 text-center text-slate-700 font-medium">
        {city}
      </p>
    </div>
  );
}

export default MainWeather;
