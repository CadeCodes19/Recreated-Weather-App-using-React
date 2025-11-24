import humidity from "../images/humidity.png";

function Humidity() {
  return (
    <div className="flex flex-col items-center">
      <img className="w-12 md:w-16 lg:w-20" src={humidity} alt="Humidity" />
      <h3 className="mt-2 text-base md:text-lg lg:text-xl">50%</h3>
      <p className="text-sm md:text-base lg:text-lg">Humidity</p>
    </div>
  );
}

export default Humidity;
