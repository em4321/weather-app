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
  const { name, country, sunrise, sunset } = data.city;
  const printLocation = name;
  const printCountry = country;
  const printSunrise = new Date(sunrise * 1000);
  const printSunset = new Date(sunset * 1000);

  // Weather data [Array 0]
  const dateTime0 = data.list[0].dt_txt;
  const dateTimeArray0 = new Date(dateTime0);
  const weatherArray0 = data.list[0].weather[0].description;
  const iconArray0 = data.list[0].weather[0].icon;
  const tempArray0 = data.list[0].main.temp;
  const feels_likeArray0 = data.list[0].main.feels_like;
  const humidityArray0 = data.list[0].main.humidity;
  // Weather data [Array 2]
  const dateTime2 = data.list[2].dt_txt;
  const dateTimeArray2 = new Date(dateTime2);
  const weatherArray2 = data.list[2].weather[0].description;
  const iconArray2 = data.list[2].weather[0].icon;
  const tempArray2 = data.list[2].main.temp;
  const feels_likeArray2 = data.list[2].main.feels_like;
  const humidityArray2 = data.list[2].main.humidity;

  // Weather data [Array 4]
  const dateTime4 = data.list[4].dt_txt;
  const dateTimeArray4 = new Date(dateTime4);
  const weatherArray4 = data.list[4].weather[0].description;
  const iconArray4 = data.list[4].weather[0].icon;
  const tempArray4 = data.list[4].main.temp;
  const feels_likeArray4 = data.list[2].main.feels_like;
  const humidityArray4 = data.list[4].main.humidity;

  // Weather data [Array 6]
  const dateTime6 = data.list[6].dt_txt;
  const dateTimeArray6 = new Date(dateTime6);
  const weatherArray6 = data.list[6].weather[0].description;
  const iconArray6 = data.list[6].weather[0].icon;
  const tempArray6 = data.list[6].main.temp;
  const feels_likeArray6 = data.list[6].main.feels_like;
  const humidityArray6 = data.list[6].main.humidity;

  // Weather data [Array 8]
  const dateTime8 = data.list[8].dt_txt;
  const dateTimeArray8 = new Date(dateTime8);
  const weatherArray8 = data.list[8].weather[0].description;
  const iconArray8 = data.list[8].weather[0].icon;
  const tempArray8 = data.list[8].main.temp;
  const feels_likeArray8 = data.list[8].main.feels_like;
  const humidityArray8 = data.list[8].main.humidity;

  // Weather data [Array 10]
  const dateTime10 = data.list[10].dt_txt;
  const dateTimeArray10 = new Date(dateTime10);
  const weatherArray10 = data.list[10].weather[0].description;
  const iconArray10 = data.list[10].weather[0].icon;
  const tempArray10 = data.list[10].main.temp;
  const feels_likeArray10 = data.list[10].main.feels_like;
  const humidityArray10 = data.list[10].main.humidity;

  // Weather data [Array 12]
  const dateTime12 = data.list[12].dt_txt;
  const dateTimeArray12 = new Date(dateTime12);
  const weatherArray12 = data.list[12].weather[0].description;
  const iconArray12 = data.list[12].weather[0].icon;
  const tempArray12 = data.list[12].main.temp;
  const feels_likeArray12 = data.list[12].main.feels_like;
  const humidityArray12 = data.list[12].main.humidity;

  // Weather data [Array 14]
  const dateTime14 = data.list[14].dt_txt;
  const dateTimeArray14 = new Date(dateTime14);
  const weatherArray14 = data.list[14].weather[0].description;
  const iconArray14 = data.list[14].weather[0].icon;
  const tempArray14 = data.list[14].main.temp;
  const feels_likeArray14 = data.list[14].main.feels_like;
  const humidityArray14 = data.list[14].main.humidity;

  // Weather data [Array 16]
  const dateTime16 = data.list[16].dt_txt;
  const dateTimeArray16 = new Date(dateTime16);
  const weatherArray16 = data.list[16].weather[0].description;
  const iconArray16 = data.list[16].weather[0].icon;
  const tempArray16 = data.list[16].main.temp;
  const feels_likeArray16 = data.list[16].main.feels_like;
  const humidityArray16 = data.list[16].main.humidity;

  // Weather data [Array 18]
  const dateTime18 = data.list[18].dt_txt;
  const dateTimeArray18 = new Date(dateTime18);
  const weatherArray18 = data.list[18].weather[0].description;
  const iconArray18 = data.list[18].weather[0].icon;
  const tempArray18 = data.list[18].main.temp;
  const feels_likeArray18 = data.list[18].main.feels_like;
  const humidityArray18 = data.list[18].main.humidity;

  // Weather data [Array 20]
  const dateTime20 = data.list[20].dt_txt;
  const dateTimeArray20 = new Date(dateTime20);
  const weatherArray20 = data.list[20].weather[0].description;
  const iconArray20 = data.list[20].weather[0].icon;
  const tempArray20 = data.list[20].main.temp;
  const feels_likeArray20 = data.list[20].main.feels_like;
  const humidityArray20 = data.list[20].main.humidity;

  // Weather data [Array 22]
  const dateTime22 = data.list[22].dt_txt;
  const dateTimeArray22 = new Date(dateTime22);
  const weatherArray22 = data.list[22].weather[0].description;
  const iconArray22 = data.list[22].weather[0].icon;
  const tempArray22 = data.list[22].main.temp;
  const feels_likeArray22 = data.list[22].main.feels_like;
  const humidityArray22 = data.list[22].main.humidity;

  // Weather data [Array 24]
  const dateTime24 = data.list[24].dt_txt;
  const dateTimeArray24 = new Date(dateTime24);
  const weatherArray24 = data.list[24].weather[0].description;
  const iconArray24 = data.list[24].weather[0].icon;
  const tempArray24 = data.list[24].main.temp;
  const feels_likeArray24 = data.list[24].main.feels_like;
  const humidityArray24 = data.list[24].main.humidity;

  // Weather data [Array 26]
  const dateTime26 = data.list[26].dt_txt;
  const dateTimeArray26 = new Date(dateTime26);
  const weatherArray26 = data.list[26].weather[0].description;
  const iconArray26 = data.list[26].weather[0].icon;
  const tempArray26 = data.list[26].main.temp;
  const feels_likeArray26 = data.list[26].main.feels_like;
  const humidityArray26 = data.list[26].main.humidity;

  // Weather data [Array 28]
  const dateTime28 = data.list[28].dt_txt;
  const dateTimeArray28 = new Date(dateTime28);
  const weatherArray28 = data.list[28].weather[0].description;
  const iconArray28 = data.list[28].weather[0].icon;
  const tempArray28 = data.list[28].main.temp;
  const feels_likeArray28 = data.list[28].main.feels_like;
  const humidityArray28 = data.list[28].main.humidity;

  // Weather data [Array 30]
  const dateTime30 = data.list[30].dt_txt;
  const dateTimeArray30 = new Date(dateTime30);
  const weatherArray30 = data.list[30].weather[0].description;
  const iconArray30 = data.list[30].weather[0].icon;
  const tempArray30 = data.list[30].main.temp;
  const feels_likeArray30 = data.list[30].main.feels_like;
  const humidityArray30 = data.list[30].main.humidity;

  // Weather data [Array 32]
  const dateTime32 = data.list[32].dt_txt;
  const dateTimeArray32 = new Date(dateTime32);
  const weatherArray32 = data.list[32].weather[0].description;
  const iconArray32 = data.list[32].weather[0].icon;
  const tempArray32 = data.list[32].main.temp;
  const feels_likeArray32 = data.list[32].main.feels_like;
  const humidityArray32 = data.list[32].main.humidity;

  // Weather data [Array 34]
  const dateTime34 = data.list[34].dt_txt;
  const dateTimeArray34 = new Date(dateTime34);
  const weatherArray34 = data.list[34].weather[0].description;
  const iconArray34 = data.list[34].weather[0].icon;
  const tempArray34 = data.list[34].main.temp;
  const feels_likeArray34 = data.list[34].main.feels_like;
  const humidityArray34 = data.list[34].main.humidity;

  // Weather data [Array 36]
  const dateTime36 = data.list[36].dt_txt;
  const dateTimeArray36 = new Date(dateTime36);
  const weatherArray36 = data.list[36].weather[0].description;
  const iconArray36 = data.list[36].weather[0].icon;
  const tempArray36 = data.list[36].main.temp;
  const feels_likeArray36 = data.list[36].main.feels_like;
  const humidityArray36 = data.list[36].main.humidity;

  // Weather data [Array 38]
  const dateTime38 = data.list[38].dt_txt;
  const dateTimeArray38 = new Date(dateTime38);
  const weatherArray38 = data.list[38].weather[0].description;
  const iconArray38 = data.list[38].weather[0].icon;
  const tempArray38 = data.list[38].main.temp;
  const feels_likeArray38 = data.list[38].main.feels_like;
  const humidityArray38 = data.list[38].main.humidity;

  rootRef.innerHTML = getHtml(
    printCountry,
    printLocation,
    printSunrise,
    printSunset,

    //Array0 data
    dateTimeArray0,
    weatherArray0,
    iconArray0,
    tempArray0,
    feels_likeArray0,
    humidityArray0,

    //Array2 data
    dateTimeArray2,
    weatherArray2,
    iconArray2,
    tempArray2,
    feels_likeArray2,
    humidityArray2,

    //Array4 data
    dateTimeArray4,
    weatherArray4,
    iconArray4,
    tempArray4,
    feels_likeArray4,
    humidityArray4,

    //Array6 data
    dateTimeArray6,
    weatherArray6,
    iconArray6,
    tempArray6,
    feels_likeArray6,
    humidityArray6,

    //Array8 data
    dateTimeArray8,
    weatherArray8,
    iconArray8,
    tempArray8,
    feels_likeArray8,
    humidityArray8,

    //Array10 data
    dateTimeArray10,
    weatherArray10,
    iconArray10,
    tempArray10,
    feels_likeArray10,
    humidityArray10,

    //Array12 data
    dateTimeArray12,
    weatherArray12,
    iconArray12,
    tempArray12,
    feels_likeArray12,
    humidityArray12,

    //Array14 data
    dateTimeArray14,
    weatherArray14,
    iconArray14,
    tempArray14,
    feels_likeArray14,
    humidityArray14,

    //Array16 data
    dateTimeArray16,
    weatherArray16,
    iconArray16,
    tempArray16,
    feels_likeArray16,
    humidityArray16,

    //Array18 data
    dateTimeArray18,
    weatherArray18,
    iconArray18,
    tempArray18,
    feels_likeArray18,
    humidityArray18,

    //Array20 data
    dateTimeArray20,
    weatherArray20,
    iconArray20,
    tempArray20,
    feels_likeArray20,
    humidityArray20,

    //Array22 data
    dateTimeArray22,
    weatherArray22,
    iconArray22,
    tempArray22,
    feels_likeArray22,
    humidityArray22,

    //Array24 data
    dateTimeArray24,
    weatherArray24,
    iconArray24,
    tempArray24,
    feels_likeArray24,
    humidityArray24,

    //Array26 data
    dateTimeArray26,
    weatherArray26,
    iconArray26,
    tempArray26,
    feels_likeArray26,
    humidityArray26,

    //Array28 data
    dateTimeArray28,
    weatherArray28,
    iconArray28,
    tempArray28,
    feels_likeArray28,
    humidityArray28,

    //Array30 data
    dateTimeArray30,
    weatherArray30,
    iconArray30,
    tempArray30,
    feels_likeArray30,
    humidityArray30,

    //Array32 data
    dateTimeArray32,
    weatherArray32,
    iconArray32,
    tempArray32,
    feels_likeArray32,
    humidityArray32,

    //Array34 data
    dateTimeArray34,
    weatherArray34,
    iconArray34,
    tempArray34,
    feels_likeArray34,
    humidityArray34,

    //Array36 data
    dateTimeArray36,
    weatherArray36,
    iconArray36,
    tempArray36,
    feels_likeArray36,
    humidityArray36,

    //Array38 data
    dateTimeArray38,
    weatherArray38,
    iconArray38,
    tempArray38,
    feels_likeArray38,
    humidityArray38
  );
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
  try {
    const coords = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value},,GB&limit=1&appid=09bd509dc3f293584e3d0a44061be1ce`
    );

    const { lat, lon } = coords.data[0];
    getWeather(lat, lon);
  } catch (err) {
    rootRef.innerHTML = `Location not found, please try again`;
  }
}

// function that listens for user input
searchRef.addEventListener("input", async (e) => {
  rootRef.innerHTML = `Click the search icon to check the weather`;
  // function that listens for a click to trigger uses input
  searchButtonRef.addEventListener("click", async () => {
    await nameToCoords(e.target.value);
  });
});
