const rootRef = document.getElementById("root");
const searchRef = document.getElementById("search-bar");
const locationRef = document.getElementById("getLocation");
const searchButtonRef = document.getElementById("searchButton");

import { getHtml } from "./html.js";
import { getLocation } from "./location.js";

const spinner = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

// function that gets the weather based on longitude and latitude
async function getWeather(latitude, longitude) {
  // forcast API
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=09bd509dc3f293584e3d0a44061be1ce&units=metric`
  );

  console.log(data);
  const { name, country, sunrise, sunset, timezone } = data.city;
  const printLocation = name;
  const printCountry = country;
  const printSunrise = new Date(sunrise * 1000);
  const printSunset = new Date(sunset * 1000);
  const printTimezone = timezone;

  // Weather data [Array 0]
  const dateTime0 = data.list[0].dt_txt;
  const dateTimeArray0 = new Date(dateTime0);
  const weatherArray0 = data.list[0].weather[0].description;
  const iconArray0 = data.list[0].weather[0].icon;
  const tempArray0 = data.list[0].main.temp;
  const humidityArray0 = data.list[0].main.humidity;

  // Weather data [Array 8]
  const dateTime8 = data.list[8].dt_txt;
  const dateTimeArray8 = new Date(dateTime8);
  const weatherArray8 = data.list[8].weather[0].description;
  const iconArray8 = data.list[8].weather[0].icon;
  const tempArray8 = data.list[8].main.temp;
  const humidityArray8 = data.list[8].main.humidity;

  // Weather data [Array 16]
  const dateTime16 = data.list[16].dt_txt;
  const dateTimeArray16 = new Date(dateTime16);
  const weatherArray16 = data.list[16].weather[0].description;
  const iconArray16 = data.list[16].weather[0].icon;
  const tempArray16 = data.list[16].main.temp;
  const humidityArray16 = data.list[16].main.humidity;

  // Weather data [Array 24]
  const dateTime24 = data.list[24].dt_txt;
  const dateTimeArray24 = new Date(dateTime24);
  const weatherArray24 = data.list[24].weather[0].description;
  const iconArray24 = data.list[24].weather[0].icon;
  const tempArray24 = data.list[24].main.temp;
  const humidityArray24 = data.list[24].main.humidity;

  // Weather data [Array 32]
  const dateTime32 = data.list[32].dt_txt;
  const dateTimeArray32 = new Date(dateTime32);
  const weatherArray32 = data.list[32].weather[0].description;
  const iconArray32 = data.list[32].weather[0].icon;
  const tempArray32 = data.list[32].main.temp;
  const humidityArray32 = data.list[32].main.humidity;

  // function that listens for a click to trigger uses input
  searchButtonRef.addEventListener("click", async () => {
    rootRef.innerHTML = getHtml(
      printCountry,
      printLocation,
      printSunrise,
      printSunset,
      printTimezone,

      //Array0 data
      dateTimeArray0,
      weatherArray0,
      iconArray0,
      tempArray0,
      humidityArray0,

      //Array8 data
      dateTimeArray8,
      weatherArray8,
      iconArray8,
      tempArray8,
      humidityArray8,

      //Array16 data
      dateTimeArray16,
      weatherArray16,
      iconArray16,
      tempArray16,
      humidityArray16,

      //Array24 data
      dateTimeArray24,
      weatherArray24,
      iconArray24,
      tempArray24,
      humidityArray24,

      //Array32 data
      dateTimeArray32,
      weatherArray32,
      iconArray32,
      tempArray32,
      humidityArray32
    );
  });
}

// function that listens for a click and triggers getting users location
locationRef.addEventListener("click", async () => {
  rootRef.innerHTML = spinner;
  try {
    const { coords } = await getLocation();

    const { latitude, longitude } = coords;
    getWeather(latitude, longitude);
  } catch (err) {
    rootRef.innerHTML = `Can't access location, please try again`;
  }
});

// function the converts user input into longitude and latitude
async function nameToCoords(value) {
  rootRef.innerHTML = `Click the search icon to check the weather`;
  try {
    const coords = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=09bd509dc3f293584e3d0a44061be1ce`
    );

    const { lat, lon } = coords.data[0];
    getWeather(lat, lon);
  } catch (err) {
    rootRef.innerHTML = `Location not found, please try again`;
  }
}

// function that listens for user input
searchRef.addEventListener("input", (e) => {
  nameToCoords(e.target.value);
});
