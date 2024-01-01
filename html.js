export function getHtml(
  country,
  location,
  sunrise,
  sunset,
  timezone,
  //Array0 data
  array0_datetime,
  array0_weather,
  array0_icon,
  array0_temp,
  array0_humidity,
  //Array8 data
  array8_datetime,
  array8_weather,
  array8_icon,
  array8_temp,
  array8_humidity,
  //Array16 data
  array16_datetime,
  array16_weather,
  array16_icon,
  array16_temp,
  array16_humidity,
  //Array24 data
  array24_datetime,
  array24_weather,
  array24_icon,
  array24_temp,
  array24_humidity,
  //Array32 data
  array32_datetime,
  array32_weather,
  array32_icon,
  array32_temp,
  array32_humidity
) {
  return `<div class = "current-weather">
  <div class = "wf-location">
  <h1>${location}, ${country}:</h1>
    
        <div class = "wf-0">
        <h3>${array0_datetime.toDateString()} - ${array0_datetime.toLocaleTimeString()}:</h3>
        <h3>${array0_weather}</h3>
        <img src = "https://openweathermap.org/img/wn/${array0_icon}@2x.png">
        <p>Temp: ${array0_temp}°</p>
        <p>Humidity: ${array0_humidity}%</p>
        <p>Sunrise: ${sunrise.toLocaleTimeString()}</p> 
        <p>Sunset: ${sunset.toLocaleTimeString()}</p>
        <p>Timezone: ${timezone}</p>
        </div>
        </div>
        </div>
    
        <div class = "wf">
        <div class = "wf-8">
        <h3>${array8_datetime.toDateString()} - ${array8_datetime.toLocaleTimeString()}:</h3>
        <h3>${array8_weather}</h3>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array8_icon}@2x.png">
        <p>Temp: ${array8_temp}°</p>
        <p>Humidity: ${array8_humidity}%</p>
        </div>
       
            <div class = "wf-16">
            <h3>${array16_datetime.toDateString()} - ${array16_datetime.toLocaleTimeString()}:</h3>
            <h3>${array16_weather}</h3>
            <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array16_icon}@2x.png">
            <p>Temp: ${array16_temp}°</p>
            <p>Humidity: ${array16_humidity}%</p>
            </div>
           
            <div class = "wf-24">
            <h3>${array24_datetime.toDateString()} - ${array24_datetime.toLocaleTimeString()}:</h3>
            <h3>${array24_weather}</h3>
            <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array24_icon}@2x.png">
            <p>Temp: ${array24_temp}°</p>
            <p>Humidity: ${array24_humidity}%</p>
            </div>
          
            <div class = "wf-32">
            <h3>${array32_datetime.toDateString()} - ${array32_datetime.toLocaleTimeString()}:</h3>
             <h3>${array32_weather}</h3>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array32_icon}@2x.png">
            <p>Temp: ${array32_temp}°</p>
            <p>Humidity: ${array32_humidity}%</p>
            </div>
            </div>`;
}
