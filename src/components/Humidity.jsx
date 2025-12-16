import humidity from "../images/humidity.png";

function Humidity({ humid }) {
  return (
    <div className="flex flex-col items-center">
      <img className="w-12 md:w-16 lg:w-20" src={humidity} alt="Humidity" />
      <h3 className="mt-2 text-base md:text-lg lg:text-xl font-medium">
        {humid}%
      </h3>
      <p className="text-sm md:text-base lg:text-lg text-slate-700 font-medium">
        Humidity
      </p>
    </div>
  );
}

export default Humidity;
