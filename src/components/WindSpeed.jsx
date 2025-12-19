import windImg from "../images/wind.png";

function WindSpeed({ windSpeed }) {
  return (
    <div className="flex flex-col items-center">
      <img className="w-12 md:w-16 lg:w-20" src={windImg} alt="Humidity" />
      <h3 className="mt-2 text-base md:text-lg lg:text-xl font-medium text-white">
        {windSpeed} k/m
      </h3>
      <p className="text-sm md:text-base lg:text-lg text-gray-100 font-medium">
        Wind Speed
      </p>
    </div>
  );
}

export default WindSpeed;
