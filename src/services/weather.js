const apiKey = "820a6006189840bd5ee93c38c25097ec";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeatherData(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  return response.json();
}

export default getWeatherData;
