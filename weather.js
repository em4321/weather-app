const rootRef = document.getElementById("root");
const searchRef = document.getElementById("search-bar");
const locationRef = document.getElementById("getLocation");
const searchButtonRef = document.getElementById("searchButton");

import { getHtml } from "./html.js";
import { getLocation } from "./location.js";

const spinner = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

// function that gets the weather based on longitude and latitude
async function getWeather(latitude, longitude) {
  // 5 day forcast API
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=09bd509dc3f293584e3d0a44061be1ce&units=metric`
  );

  console.log(data);
  const { name, country, sunrise, sunset } = data.city;
  const printLocation = name;
  const printCountry = country;
  const printSunrise = new Date(sunrise * 1000);
  const printSunset = new Date(sunset * 1000);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Weather data [Array 0]
  const now = new Date();
  const dayNow = weekday[now.getDay()];
  const dateNow = now.getDate();
  const monthNow = month[now.getMonth()];

  const dateTime0 = data.list[0].dt_txt;
  const dateTimeArray0 = new Date(dateTime0);
  const day0 = weekday[dateTimeArray0.getDay()];
  const tempMax0 = data.list[0].main.temp_max;
  const tempMin0 = data.list[0].main.temp_min;
  const weatherArray0 = data.list[0].weather[0].description;
  const iconArray0 = data.list[0].weather[0].icon;
  const tempArray0 = data.list[0].main.temp;
  const feels_likeArray0 = data.list[0].main.feels_like;
  const humidityArray0 = data.list[0].main.humidity;
  const windSpeedArray0 = data.list[0].wind.speed;

  // Weather data [Array 1]
  const dateTime1 = data.list[1].dt_txt;
  const dateTimeArray1 = new Date(dateTime1);
  const day1 = weekday[dateTimeArray1.getDay()];
  const tempMax1 = data.list[1].main.temp_max;
  const tempMin1 = data.list[1].main.temp_min;
  const weatherArray1 = data.list[1].weather[0].description;
  const iconArray1 = data.list[1].weather[0].icon;
  const tempArray1 = data.list[1].main.temp;
  const feels_likeArray1 = data.list[1].main.feels_like;
  const humidityArray1 = data.list[1].main.humidity;
  const windSpeedArray1 = data.list[1].wind.speed;

  // Weather data [Array 2]
  const dateTime2 = data.list[2].dt_txt;
  const dateTimeArray2 = new Date(dateTime2);
  const day2 = weekday[dateTimeArray2.getDay()];
  const tempMax2 = data.list[2].main.temp_max;
  const tempMin2 = data.list[2].main.temp_min;
  const weatherArray2 = data.list[2].weather[0].description;
  const iconArray2 = data.list[2].weather[0].icon;
  const tempArray2 = data.list[2].main.temp;
  const feels_likeArray2 = data.list[2].main.feels_like;
  const humidityArray2 = data.list[2].main.humidity;
  const windSpeedArray2 = data.list[2].wind.speed;

  // Weather data [Array 3]
  const dateTime3 = data.list[3].dt_txt;
  const dateTimeArray3 = new Date(dateTime3);
  const day3 = weekday[dateTimeArray3.getDay()];
  const tempMax3 = data.list[3].main.temp_max;
  const tempMin3 = data.list[3].main.temp_min;
  const weatherArray3 = data.list[3].weather[0].description;
  const iconArray3 = data.list[3].weather[0].icon;
  const tempArray3 = data.list[3].main.temp;
  const feels_likeArray3 = data.list[3].main.feels_like;
  const humidityArray3 = data.list[3].main.humidity;
  const windSpeedArray3 = data.list[3].wind.speed;

  // Weather data [Array 4]
  const dateTime4 = data.list[4].dt_txt;
  const dateTimeArray4 = new Date(dateTime4);
  const day4 = weekday[dateTimeArray4.getDay()];
  const tempMax4 = data.list[4].main.temp_max;
  const tempMin4 = data.list[4].main.temp_min;
  const weatherArray4 = data.list[4].weather[0].description;
  const iconArray4 = data.list[4].weather[0].icon;
  const tempArray4 = data.list[4].main.temp;
  const feels_likeArray4 = data.list[4].main.feels_like;
  const humidityArray4 = data.list[4].main.humidity;
  const windSpeedArray4 = data.list[4].wind.speed;

  // Weather data [Array 5]
  const dateTime5 = data.list[5].dt_txt;
  const dateTimeArray5 = new Date(dateTime5);
  const day5 = weekday[dateTimeArray5.getDay()];
  const tempMax5 = data.list[5].main.temp_max;
  const tempMin5 = data.list[5].main.temp_min;
  const weatherArray5 = data.list[5].weather[0].description;
  const iconArray5 = data.list[5].weather[0].icon;
  const tempArray5 = data.list[5].main.temp;
  const feels_likeArray5 = data.list[5].main.feels_like;
  const humidityArray5 = data.list[5].main.humidity;
  const windSpeedArray5 = data.list[5].wind.speed;

  // Weather data [Array 6]
  const dateTime6 = data.list[6].dt_txt;
  const dateTimeArray6 = new Date(dateTime6);
  const day6 = weekday[dateTimeArray6.getDay()];
  const tempMax6 = data.list[6].main.temp_max;
  const tempMin6 = data.list[6].main.temp_min;
  const weatherArray6 = data.list[6].weather[0].description;
  const iconArray6 = data.list[6].weather[0].icon;
  const tempArray6 = data.list[6].main.temp;
  const feels_likeArray6 = data.list[6].main.feels_like;
  const humidityArray6 = data.list[6].main.humidity;
  const windSpeedArray6 = data.list[6].wind.speed;

  // Weather data [Array 7]
  const dateTime7 = data.list[7].dt_txt;
  const dateTimeArray7 = new Date(dateTime7);
  const day7 = weekday[dateTimeArray7.getDay()];
  const tempMax7 = data.list[7].main.temp_max;
  const tempMin7 = data.list[7].main.temp_min;
  const weatherArray7 = data.list[7].weather[0].description;
  const iconArray7 = data.list[7].weather[0].icon;
  const tempArray7 = data.list[7].main.temp;
  const feels_likeArray7 = data.list[7].main.feels_like;
  const humidityArray7 = data.list[7].main.humidity;
  const windSpeedArray7 = data.list[7].wind.speed;

  // Weather data [Array 8]
  const dateTime8 = data.list[8].dt_txt;
  const dateTimeArray8 = new Date(dateTime8);
  const day8 = weekday[dateTimeArray8.getDay()];
  const tempMax8 = data.list[8].main.temp_max;
  const tempMin8 = data.list[8].main.temp_min;
  const weatherArray8 = data.list[8].weather[0].description;
  const iconArray8 = data.list[8].weather[0].icon;
  const tempArray8 = data.list[8].main.temp;
  const feels_likeArray8 = data.list[8].main.feels_like;
  const humidityArray8 = data.list[8].main.humidity;
  const windSpeedArray8 = data.list[8].wind.speed;

  // Weather data [Array 9]
  const dateTime9 = data.list[9].dt_txt;
  const dateTimeArray9 = new Date(dateTime9);
  const day9 = weekday[dateTimeArray9.getDay()];
  const tempMax9 = data.list[9].main.temp_max;
  const tempMin9 = data.list[9].main.temp_min;
  const weatherArray9 = data.list[9].weather[0].description;
  const iconArray9 = data.list[9].weather[0].icon;
  const tempArray9 = data.list[9].main.temp;
  const feels_likeArray9 = data.list[9].main.feels_like;
  const humidityArray9 = data.list[9].main.humidity;
  const windSpeedArray9 = data.list[9].wind.speed;

  // Weather data [Array 10]
  const dateTime10 = data.list[10].dt_txt;
  const dateTimeArray10 = new Date(dateTime10);
  const day10 = weekday[dateTimeArray10.getDay()];
  const tempMax10 = data.list[10].main.temp_max;
  const tempMin10 = data.list[10].main.temp_min;
  const weatherArray10 = data.list[10].weather[0].description;
  const iconArray10 = data.list[10].weather[0].icon;
  const tempArray10 = data.list[10].main.temp;
  const feels_likeArray10 = data.list[10].main.feels_like;
  const humidityArray10 = data.list[10].main.humidity;
  const windSpeedArray10 = data.list[10].wind.speed;

  // Weather data [Array 11]
  const dateTime11 = data.list[11].dt_txt;
  const dateTimeArray11 = new Date(dateTime11);
  const day11 = weekday[dateTimeArray11.getDay()];
  const tempMax11 = data.list[11].main.temp_max;
  const tempMin11 = data.list[11].main.temp_min;
  const weatherArray11 = data.list[11].weather[0].description;
  const iconArray11 = data.list[11].weather[0].icon;
  const tempArray11 = data.list[11].main.temp;
  const feels_likeArray11 = data.list[11].main.feels_like;
  const humidityArray11 = data.list[11].main.humidity;
  const windSpeedArray11 = data.list[11].wind.speed;

  // Weather data [Array 12]
  const dateTime12 = data.list[12].dt_txt;
  const dateTimeArray12 = new Date(dateTime12);
  const day12 = weekday[dateTimeArray12.getDay()];
  const tempMax12 = data.list[12].main.temp_max;
  const tempMin12 = data.list[12].main.temp_min;
  const weatherArray12 = data.list[12].weather[0].description;
  const iconArray12 = data.list[12].weather[0].icon;
  const tempArray12 = data.list[12].main.temp;
  const feels_likeArray12 = data.list[12].main.feels_like;
  const humidityArray12 = data.list[12].main.humidity;
  const windSpeedArray12 = data.list[12].wind.speed;

  // Weather data [Array 13]
  const dateTime13 = data.list[13].dt_txt;
  const dateTimeArray13 = new Date(dateTime13);
  const day13 = weekday[dateTimeArray13.getDay()];
  const tempMax13 = data.list[13].main.temp_max;
  const tempMin13 = data.list[13].main.temp_min;
  const weatherArray13 = data.list[13].weather[0].description;
  const iconArray13 = data.list[13].weather[0].icon;
  const tempArray13 = data.list[13].main.temp;
  const feels_likeArray13 = data.list[13].main.feels_like;
  const humidityArray13 = data.list[13].main.humidity;
  const windSpeedArray13 = data.list[13].wind.speed;

  // Weather data [Array 14]
  const dateTime14 = data.list[14].dt_txt;
  const dateTimeArray14 = new Date(dateTime14);
  const day14 = weekday[dateTimeArray14.getDay()];
  const tempMax14 = data.list[14].main.temp_max;
  const tempMin14 = data.list[14].main.temp_min;
  const weatherArray14 = data.list[14].weather[0].description;
  const iconArray14 = data.list[14].weather[0].icon;
  const tempArray14 = data.list[14].main.temp;
  const feels_likeArray14 = data.list[14].main.feels_like;
  const humidityArray14 = data.list[14].main.humidity;
  const windSpeedArray14 = data.list[14].wind.speed;

  // Weather data [Array 15]
  const dateTime15 = data.list[15].dt_txt;
  const dateTimeArray15 = new Date(dateTime15);
  const day15 = weekday[dateTimeArray15.getDay()];
  const tempMax15 = data.list[15].main.temp_max;
  const tempMin15 = data.list[15].main.temp_min;
  const weatherArray15 = data.list[15].weather[0].description;
  const iconArray15 = data.list[15].weather[0].icon;
  const tempArray15 = data.list[15].main.temp;
  const feels_likeArray15 = data.list[15].main.feels_like;
  const humidityArray15 = data.list[15].main.humidity;
  const windSpeedArray15 = data.list[15].wind.speed;

  // Weather data [Array 16]
  const dateTime16 = data.list[16].dt_txt;
  const dateTimeArray16 = new Date(dateTime16);
  const day16 = weekday[dateTimeArray16.getDay()];
  const tempMax16 = data.list[16].main.temp_max;
  const tempMin16 = data.list[16].main.temp_min;
  const weatherArray16 = data.list[16].weather[0].description;
  const iconArray16 = data.list[16].weather[0].icon;
  const tempArray16 = data.list[16].main.temp;
  const feels_likeArray16 = data.list[16].main.feels_like;
  const humidityArray16 = data.list[16].main.humidity;
  const windSpeedArray16 = data.list[16].wind.speed;

  // Weather data [Array 17]
  const dateTime17 = data.list[17].dt_txt;
  const dateTimeArray17 = new Date(dateTime17);
  const day17 = weekday[dateTimeArray17.getDay()];
  const tempMax17 = data.list[17].main.temp_max;
  const tempMin17 = data.list[17].main.temp_min;
  const weatherArray17 = data.list[17].weather[0].description;
  const iconArray17 = data.list[17].weather[0].icon;
  const tempArray17 = data.list[17].main.temp;
  const feels_likeArray17 = data.list[17].main.feels_like;
  const humidityArray17 = data.list[17].main.humidity;
  const windSpeedArray17 = data.list[17].wind.speed;

  // Weather data [Array 18]
  const dateTime18 = data.list[18].dt_txt;
  const dateTimeArray18 = new Date(dateTime18);
  const day18 = weekday[dateTimeArray18.getDay()];
  const tempMax18 = data.list[18].main.temp_max;
  const tempMin18 = data.list[18].main.temp_min;
  const weatherArray18 = data.list[18].weather[0].description;
  const iconArray18 = data.list[18].weather[0].icon;
  const tempArray18 = data.list[18].main.temp;
  const feels_likeArray18 = data.list[18].main.feels_like;
  const humidityArray18 = data.list[18].main.humidity;
  const windSpeedArray18 = data.list[18].wind.speed;

  // Weather data [Array 19]
  const dateTime19 = data.list[19].dt_txt;
  const dateTimeArray19 = new Date(dateTime19);
  const day19 = weekday[dateTimeArray19.getDay()];
  const tempMax19 = data.list[19].main.temp_max;
  const tempMin19 = data.list[19].main.temp_min;
  const weatherArray19 = data.list[19].weather[0].description;
  const iconArray19 = data.list[19].weather[0].icon;
  const tempArray19 = data.list[19].main.temp;
  const feels_likeArray19 = data.list[19].main.feels_like;
  const humidityArray19 = data.list[19].main.humidity;
  const windSpeedArray19 = data.list[19].wind.speed;

  // Weather data [Array 20]
  const dateTime20 = data.list[20].dt_txt;
  const dateTimeArray20 = new Date(dateTime20);
  const day20 = weekday[dateTimeArray20.getDay()];
  const tempMax20 = data.list[20].main.temp_max;
  const tempMin20 = data.list[20].main.temp_min;
  const weatherArray20 = data.list[20].weather[0].description;
  const iconArray20 = data.list[20].weather[0].icon;
  const tempArray20 = data.list[20].main.temp;
  const feels_likeArray20 = data.list[20].main.feels_like;
  const humidityArray20 = data.list[20].main.humidity;
  const windSpeedArray20 = data.list[20].wind.speed;

  // Weather data [Array 21]
  const dateTime21 = data.list[21].dt_txt;
  const dateTimeArray21 = new Date(dateTime21);
  const day21 = weekday[dateTimeArray21.getDay()];
  const tempMax21 = data.list[21].main.temp_max;
  const tempMin21 = data.list[21].main.temp_min;
  const weatherArray21 = data.list[21].weather[0].description;
  const iconArray21 = data.list[21].weather[0].icon;
  const tempArray21 = data.list[21].main.temp;
  const feels_likeArray21 = data.list[21].main.feels_like;
  const humidityArray21 = data.list[21].main.humidity;
  const windSpeedArray21 = data.list[21].wind.speed;

  // Weather data [Array 22]
  const dateTime22 = data.list[22].dt_txt;
  const dateTimeArray22 = new Date(dateTime22);
  const day22 = weekday[dateTimeArray22.getDay()];
  const tempMax22 = data.list[22].main.temp_max;
  const tempMin22 = data.list[22].main.temp_min;
  const weatherArray22 = data.list[22].weather[0].description;
  const iconArray22 = data.list[22].weather[0].icon;
  const tempArray22 = data.list[22].main.temp;
  const feels_likeArray22 = data.list[22].main.feels_like;
  const humidityArray22 = data.list[22].main.humidity;
  const windSpeedArray22 = data.list[22].wind.speed;

  // Weather data [Array 23]
  const dateTime23 = data.list[23].dt_txt;
  const dateTimeArray23 = new Date(dateTime23);
  const day23 = weekday[dateTimeArray23.getDay()];
  const tempMax23 = data.list[23].main.temp_max;
  const tempMin23 = data.list[23].main.temp_min;
  const weatherArray23 = data.list[23].weather[0].description;
  const iconArray23 = data.list[23].weather[0].icon;
  const tempArray23 = data.list[23].main.temp;
  const feels_likeArray23 = data.list[23].main.feels_like;
  const humidityArray23 = data.list[23].main.humidity;
  const windSpeedArray23 = data.list[23].wind.speed;

  // Weather data [Array 24]
  // const dateTime24 = data.list[24].dt_txt;
  // const dateTimeArray24 = new Date(dateTime24);
  // const day24 = weekday[dateTimeArray24.getDay()];
  // const tempMax24 = data.list[24].main.temp_max;
  // const tempMin24 = data.list[24].main.temp_min;
  // const weatherArray24 = data.list[24].weather[0].description;
  // const iconArray24 = data.list[24].weather[0].icon;
  // const tempArray24 = data.list[24].main.temp;
  // const feels_likeArray24 = data.list[24].main.feels_like;
  // const humidityArray24 = data.list[24].main.humidity;
  // const windSpeedArray24 = data.list[24].wind.speed;

  // Weather data [Array 26]
  // const dateTime26 = data.list[26].dt_txt;
  // const dateTimeArray26 = new Date(dateTime26);
  // const day26 = weekday[dateTimeArray26.getDay()];
  // const tempMax26 = data.list[26].main.temp_max;
  // const tempMin26 = data.list[26].main.temp_min;
  // const weatherArray26 = data.list[26].weather[0].description;
  // const iconArray26 = data.list[26].weather[0].icon;
  // const tempArray26 = data.list[26].main.temp;
  // const feels_likeArray26 = data.list[26].main.feels_like;
  // const humidityArray26 = data.list[26].main.humidity;
  // const windSpeedArray26 = data.list[26].wind.speed;

  // Weather data [Array 28]
  // const dateTime28 = data.list[28].dt_txt;
  // const dateTimeArray28 = new Date(dateTime28);
  // const day28 = weekday[dateTimeArray28.getDay()];
  // const tempMax28 = data.list[28].main.temp_max;
  // const tempMin28 = data.list[28].main.temp_min;
  // const weatherArray28 = data.list[28].weather[0].description;
  // const iconArray28 = data.list[28].weather[0].icon;
  // const tempArray28 = data.list[28].main.temp;
  // const feels_likeArray28 = data.list[28].main.feels_like;
  // const humidityArray28 = data.list[28].main.humidity;
  // const windSpeedArray28 = data.list[28].wind.speed;

  // // Weather data [Array 30]
  // const dateTime30 = data.list[30].dt_txt;
  // const dateTimeArray30 = new Date(dateTime30);
  // const day30 = weekday[dateTimeArray30.getDay()];
  // const tempMax30 = data.list[30].main.temp_max;
  // const tempMin30 = data.list[30].main.temp_min;
  // const weatherArray30 = data.list[30].weather[0].description;
  // const iconArray30 = data.list[30].weather[0].icon;
  // const tempArray30 = data.list[30].main.temp;
  // const feels_likeArray30 = data.list[30].main.feels_like;
  // const humidityArray30 = data.list[30].main.humidity;
  // const windSpeedArray30 = data.list[30].wind.speed;

  // Weather data [Array 32]
  // const dateTime32 = data.list[32].dt_txt;
  // const dateTimeArray32 = new Date(dateTime32);
  // const day32 = weekday[dateTimeArray32.getDay()];
  // const tempMax32 = data.list[32].main.temp_max;
  // const tempMin32 = data.list[32].main.temp_min;
  // const weatherArray32 = data.list[32].weather[0].description;
  // const iconArray32 = data.list[32].weather[0].icon;
  // const tempArray32 = data.list[32].main.temp;
  // const feels_likeArray32 = data.list[32].main.feels_like;
  // const humidityArray32 = data.list[32].main.humidity;
  // const windSpeedArray32 = data.list[32].wind.speed;

  // Weather data [Array 34]
  // const dateTime34 = data.list[34].dt_txt;
  // const dateTimeArray34 = new Date(dateTime34);
  // const day34 = weekday[dateTimeArray34.getDay()];
  // const tempMax34 = data.list[34].main.temp_max;
  // const tempMin34 = data.list[34].main.temp_min;
  // const weatherArray34 = data.list[34].weather[0].description;
  // const iconArray34 = data.list[34].weather[0].icon;
  // const tempArray34 = data.list[34].main.temp;
  // const feels_likeArray34 = data.list[34].main.feels_like;
  // const humidityArray34 = data.list[34].main.humidity;
  // const windSpeedArray34 = data.list[34].wind.speed;

  // Weather data [Array 36]
  // const dateTime36 = data.list[36].dt_txt;
  // const dateTimeArray36 = new Date(dateTime36);
  // const day36 = weekday[dateTimeArray36.getDay()];
  // const tempMax36 = data.list[36].main.temp_max;
  // const tempMin36 = data.list[36].main.temp_min;
  // const weatherArray36 = data.list[36].weather[0].description;
  // const iconArray36 = data.list[36].weather[0].icon;
  // const tempArray36 = data.list[36].main.temp;
  // const feels_likeArray36 = data.list[36].main.feels_like;
  // const humidityArray36 = data.list[36].main.humidity;
  // const windSpeedArray36 = data.list[36].wind.speed;

  // Weather data [Array 38]
  // const dateTime38 = data.list[38].dt_txt;
  // const dateTimeArray38 = new Date(dateTime38);
  // const day38 = weekday[dateTimeArray38.getDay()];
  // const tempMax38 = data.list[38].main.temp_max;
  // const tempMin38 = data.list[38].main.temp_min;
  // const weatherArray38 = data.list[38].weather[0].description;
  // const iconArray38 = data.list[38].weather[0].icon;
  // const tempArray38 = data.list[38].main.temp;
  // const feels_likeArray38 = data.list[38].main.feels_like;
  // const humidityArray38 = data.list[38].main.humidity;
  // const windSpeedArray38 = data.list[38].wind.speed;

  rootRef.innerHTML = getHtml(
    printCountry,
    printLocation,
    dayNow,
    dateNow,
    monthNow,
    printSunrise,
    printSunset,

    //Array0 data
    dateTimeArray0,
    day0,
    tempMax0,
    tempMin0,
    weatherArray0,
    iconArray0,
    tempArray0,
    feels_likeArray0,
    humidityArray0,
    windSpeedArray0,

    //Array1 data
    dateTimeArray1,
    day1,
    tempMax1,
    tempMin1,
    weatherArray1,
    iconArray1,
    tempArray1,
    feels_likeArray1,
    humidityArray1,
    windSpeedArray1,

    //Array2 data
    dateTimeArray2,
    day2,
    tempMax2,
    tempMin2,
    weatherArray2,
    iconArray2,
    tempArray2,
    feels_likeArray2,
    humidityArray2,
    windSpeedArray2,

    //Array3 data
    dateTimeArray3,
    day3,
    tempMax3,
    tempMin3,
    weatherArray3,
    iconArray3,
    tempArray3,
    feels_likeArray3,
    humidityArray3,
    windSpeedArray3,

    //Array4 data
    dateTimeArray4,
    day4,
    tempMax4,
    tempMin4,
    weatherArray4,
    iconArray4,
    tempArray4,
    feels_likeArray4,
    humidityArray4,
    windSpeedArray4,

    //Array5 data
    dateTimeArray5,
    day5,
    tempMax5,
    tempMin5,
    weatherArray5,
    iconArray5,
    tempArray5,
    feels_likeArray5,
    humidityArray5,
    windSpeedArray5,

    //Array6 data
    dateTimeArray6,
    day6,
    tempMax6,
    tempMin6,
    weatherArray6,
    iconArray6,
    tempArray6,
    feels_likeArray6,
    humidityArray6,
    windSpeedArray6,

    //Array7 data
    dateTimeArray7,
    day7,
    tempMax7,
    tempMin7,
    weatherArray7,
    iconArray7,
    tempArray7,
    feels_likeArray7,
    humidityArray7,
    windSpeedArray7,

    //Array8 data
    dateTimeArray8,
    day8,
    tempMax8,
    tempMin8,
    weatherArray8,
    iconArray8,
    tempArray8,
    feels_likeArray8,
    humidityArray8,
    windSpeedArray8,

    //Array9 data
    dateTimeArray9,
    day9,
    tempMax9,
    tempMin9,
    weatherArray9,
    iconArray9,
    tempArray9,
    feels_likeArray9,
    humidityArray9,
    windSpeedArray9,

    //Array10 data
    dateTimeArray10,
    day10,
    tempMax10,
    tempMin10,
    weatherArray10,
    iconArray10,
    tempArray10,
    feels_likeArray10,
    humidityArray10,
    windSpeedArray10,

    //Array11 data
    dateTimeArray11,
    day11,
    tempMax11,
    tempMin11,
    weatherArray11,
    iconArray11,
    tempArray11,
    feels_likeArray11,
    humidityArray11,
    windSpeedArray11,

    //Array12 data
    dateTimeArray12,
    day12,
    tempMax12,
    tempMin12,
    weatherArray12,
    iconArray12,
    tempArray12,
    feels_likeArray12,
    humidityArray12,
    windSpeedArray12,

    //Array13 data
    dateTimeArray13,
    day13,
    tempMax13,
    tempMin13,
    weatherArray13,
    iconArray13,
    tempArray13,
    feels_likeArray13,
    humidityArray13,
    windSpeedArray13,

    //Array14 data
    dateTimeArray14,
    day14,
    tempMax14,
    tempMin14,
    weatherArray14,
    iconArray14,
    tempArray14,
    feels_likeArray14,
    humidityArray14,
    windSpeedArray14,

    //Array15 data
    dateTimeArray15,
    day15,
    tempMax15,
    tempMin15,
    weatherArray15,
    iconArray15,
    tempArray15,
    feels_likeArray15,
    humidityArray15,
    windSpeedArray15,

    //Array16 data
    dateTimeArray16,
    day16,
    tempMax16,
    tempMin16,
    weatherArray16,
    iconArray16,
    tempArray16,
    feels_likeArray16,
    humidityArray16,
    windSpeedArray16,

    //Array17 data
    dateTimeArray17,
    day17,
    tempMax17,
    tempMin17,
    weatherArray17,
    iconArray17,
    tempArray17,
    feels_likeArray17,
    humidityArray17,
    windSpeedArray17,

    //Array18 data
    dateTimeArray18,
    day18,
    tempMax18,
    tempMin18,
    weatherArray18,
    iconArray18,
    tempArray18,
    feels_likeArray18,
    humidityArray18,
    windSpeedArray18,

    //Array19 data
    dateTimeArray19,
    day19,
    tempMax19,
    tempMin19,
    weatherArray19,
    iconArray19,
    tempArray19,
    feels_likeArray19,
    humidityArray19,
    windSpeedArray19,

    //Array20 data
    dateTimeArray20,
    day20,
    tempMax20,
    tempMin20,
    weatherArray20,
    iconArray20,
    tempArray20,
    feels_likeArray20,
    humidityArray20,
    windSpeedArray20,

    //Array21 data
    dateTimeArray21,
    day21,
    tempMax21,
    tempMin21,
    weatherArray21,
    iconArray21,
    tempArray21,
    feels_likeArray21,
    humidityArray21,
    windSpeedArray21,

    //Array22 data
    dateTimeArray22,
    day22,
    tempMax22,
    tempMin22,
    weatherArray22,
    iconArray22,
    tempArray22,
    feels_likeArray22,
    humidityArray22,
    windSpeedArray22,

    //Array23 data
    dateTimeArray23,
    day23,
    tempMax23,
    tempMin23,
    weatherArray23,
    iconArray23,
    tempArray23,
    feels_likeArray23,
    humidityArray23,
    windSpeedArray23

    //Array24 data
    // dateTimeArray24,
    // day24,
    // tempMax24,
    // tempMin24,
    // weatherArray24,
    // iconArray24,
    // tempArray24,
    // feels_likeArray24,
    // humidityArray24,
    // windSpeedArray24,

    //Array26 data
    // dateTimeArray26,
    // day26,
    // tempMax26,
    // tempMin26,
    // weatherArray26,
    // iconArray26,
    // tempArray26,
    // feels_likeArray26,
    // humidityArray26,
    // windSpeedArray26,

    //Array28 data
    // dateTimeArray28,
    // day28,
    // tempMax28,
    // tempMin28,
    // weatherArray28,
    // iconArray28,
    // tempArray28,
    // feels_likeArray28,
    // humidityArray28,
    // windSpeedArray28,

    //Array30 data
    // dateTimeArray30,
    // day30,
    // tempMax30,
    // tempMin30,
    // weatherArray30,
    // iconArray30,
    // tempArray30,
    // feels_likeArray30,
    // humidityArray30,
    // windSpeedArray30,

    //Array32 data
    // dateTimeArray32,
    // day32,
    // tempMax32,
    // tempMin32,
    // weatherArray32,
    // iconArray32,
    // tempArray32,
    // feels_likeArray32,
    // humidityArray32,
    // windSpeedArray32,

    //Array34 data
    // dateTimeArray34,
    // day34,
    // tempMax34,
    // tempMin34,
    // weatherArray34,
    // iconArray34,
    // tempArray34,
    // feels_likeArray34,
    // humidityArray34,
    // windSpeedArray34,

    //Array36 data
    // dateTimeArray36,
    // day36,
    // tempMax36,
    // tempMin36,
    // weatherArray36,
    // iconArray36,
    // tempArray36,
    // feels_likeArray36,
    // humidityArray36,
    // windSpeedArray36,

    //Array38 data
    // dateTimeArray38,
    // day38,
    // tempMax38,
    // tempMin38,
    // weatherArray38,
    // iconArray38,
    // tempArray38,
    // feels_likeArray38,
    // humidityArray38,
    // windSpeedArray38
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
    rootRef.innerHTML = spinner;
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
https: searchRef.addEventListener("input", async (e) => {
  rootRef.innerHTML = `Click the search icon to check the weather`;
  // function that listens for a click to trigger uses input
  searchButtonRef.addEventListener("click", async () => {
    await nameToCoords(e.target.value);
  });
});
