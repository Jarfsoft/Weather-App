async function getWeatherInfo(cityName) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c954fe59dca8548d2eb13416b4f9da3`,
    { mode: 'cors' });
  const data = await response.json();

  return data;
}

function changeBackground(main){
  const content = document.querySelector('#content');
  if(main === 'Clear')
    content.style.backgroundImage = "url('../assets/images/sun.jpg')";
  else if(main === 'Rain')
    content.style.backgroundImage = "url('../assets/images/rain.jpg')";
  else if(main === 'Snow')
    content.style.backgroundImage = "url('../assets/images/snow.jpg')";
  else if(main === 'Dust')
    content.style.backgroundImage = "url('../assets/images/dust.jpg')";
  else if(main === 'Clouds')
    content.style.backgroundImage = "url('../assets/images/clouds.jpg')";
  else
    content.style.backgroundImage = "url('../assets/images/img.jpg')";
}

const returnInfo = (city = 'Tegucigalpa', metricSystem = true) => {
  getWeatherInfo(city).then((data) => {
    const { sys: { country: ctr } } = data;

    document.querySelector('#city_country').textContent = `${city}, ${ctr}`;

    const { weather } = data;
    const [frst] = weather;

    document.querySelector('#description').textContent = `${frst.main}, ${frst.description}`;
    changeBackground(frst.main);

    const { main: { temp: tmp, feels_like: fl, humidity: hm } } = data;

    document.querySelector('#temperature').textContent = `${metricSystem ? (tmp - 273.15).toFixed(2) : ((((tmp - 273.15) * 9) / 5) + 32).toFixed(2)} °${metricSystem ? 'C' : 'F'}`;
    document.querySelector('#thermalSensation').textContent = `Thermal Sensation: ${metricSystem ? (fl - 273.15).toFixed(2) : ((((fl - 273.15) * 9) / 5) + 32).toFixed(2)} °${metricSystem ? 'C' : 'F'}`;
    document.querySelector('#humidity').textContent = `Humidity: ${hm}%`;

    const { wind: { speed: spd } } = data;

    document.querySelector('#windSpeed').textContent = `Wind Speed: ${spd}m/s`;
  });
};

export default returnInfo;