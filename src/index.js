
var weatherInfo = {};

async function getWeatherInfo(cityName = 'Tegucigalpa') {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c954fe59dca8548d2eb13416b4f9da3`);
  const data = await response.json();

  Object.assign(weatherInfo, data);
}

getWeatherInfo();

console.log(weatherInfo);