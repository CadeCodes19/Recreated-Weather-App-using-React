import clear from "../images/clear.png";

function MainWeather() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <img className=" w-24 md:w-40 lg:w-56" src={clear} alt="Weather" />
      <h1 className="text-2xl md:text-4xl lg:text-5xl mt-4">25° Celsius</h1>
      <p className="text-lg md:text-xl mt-2 text-center">Bacoor City</p>
    </div>
  );
}

export default MainWeather;
