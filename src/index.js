import {
  returnInfo
} from './getInfo';

let metricSystem = true;

const city = document.querySelector('#cityInput');

document.querySelector('#metricSystem').addEventListener('click', () => {
  metricSystem ? metricSystem = false : metricSystem = true;
  returnInfo(city.value == '' ? 'Tegucigalpa' : city.value , metricSystem);
});

document.querySelector('#cityBtn').addEventListener('click', () => {
  returnInfo(city.value, metricSystem);
});

returnInfo();

