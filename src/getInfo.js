async function getWeatherInfo(cityName = 'Tegucigalpa') {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c954fe59dca8548d2eb13416b4f9da3`,
    { mode: "cors" }
  );
  const data = await response.json();

  return data;
}

export const returnInfo = city => {
  const obj = {};
  obj.city = city;
  getWeatherInfo(city).then(data => {
    const {sys: {country: ctr}} = data;

    obj.country = ctr;
    
    const {weather} = data;

    obj.status = weather[0].main;
    obj.description = weather[0].description;
    
    const {main: {temp: tmp, feels_like: fl, humidity: hm}} = data;

    obj.temperature = tmp;
    obj.thermalSensation = fl;
    obj.humidity = hm;

    const {wind: {speed: spd}} = data;

    obj.windSpeed = spd;
  });
  
  return obj;
};