export function getHtml(
  country,
  location,
  sunrise,
  sunset,
  //Array0 data
  array0_datetime,
  array0_weather,
  array0_icon,
  array0_temp,
  array0_feels_like,
  array0_humidity,
  //Array8 data
  array8_datetime,
  array8_weather,
  array8_icon,
  array8_temp,
  array8_feels_like,
  array8_humidity,
  //Array16 data
  array16_datetime,
  array16_weather,
  array16_icon,
  array16_temp,
  array16_feels_like,
  array16_humidity,
  //Array24 data
  array24_datetime,
  array24_weather,
  array24_icon,
  array24_temp,
  array24_feels_like,
  array24_humidity,
  //Array32 data
  array32_datetime,
  array32_weather,
  array32_icon,
  array32_temp,
  array32_feels_like,
  array32_humidity
) {
  return `<div class = "current-weather">
  <div class = "wf-location">
  <h3>${array0_datetime.toDateString()}</h3>
  <h1>${location}, ${country}</h1>
  <h1>${array0_temp}°</h1>
    
        <div class = "wf-0">
        <img src = "https://openweathermap.org/img/wn/${array0_icon}@4x.png">
        <h3>Weather: ${array0_weather}</h3>
        <p><strong>Feels like ${array0_feels_like}°</strong></p>
        <p><strong>Humidity ${array0_humidity}%</strong></p>
        <!-- <small><a href="https://www.google.com/maps/place/${location},${country}">(View on Google Maps)</a></small> -->
        <h4>Sunrise ${sunrise.toLocaleTimeString()}am Sunset ${sunset.toLocaleTimeString()}pm</h4>
        </div>
        </div>
        </div>
    
        <div class = "wf">
        <button class = "wf-8">
        <h3>${array8_datetime.toDateString()}</h3>
        <p><strong>${array8_datetime.toLocaleTimeString()}</strong></p>
        <h4>${array8_temp}°</h4>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array8_icon}.png">
        <h4>${array8_weather}</h4>
        <p>Feels like ${array8_feels_like}°</p>
        <p>Humidity ${array8_humidity}%</p>
        </button>
        
       
            <button class = "wf-16">
            <h3>${array16_datetime.toDateString()}</h3>
            <p><strong>${array16_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array16_temp}°</h4> 
            <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array16_icon}.png">
            <h4>${array16_weather}</h4> 
            <p>Feels like ${array16_feels_like}°</p>
            <p>Humidity ${array16_humidity}%</p>
            </button>
           
            <button class = "wf-24">
            <h3>${array24_datetime.toDateString()}</h3>
            <p><strong>${array24_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array24_temp}°</h4>
            <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array24_icon}.png">
            <h4>${array24_weather}</h4> 
            <p>Feels like ${array24_feels_like}°</p>
            <p>Humidity ${array24_humidity}%</p>
            </button>
          
            <button class = "wf-32">
            <h3>${array32_datetime.toDateString()}</h3>
            <p><strong>${array32_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array32_temp}°</h4>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array32_icon}.png">
             <h4>${array32_weather}</h4>
             <p>Feels like ${array32_feels_like}°</p>
             <p>Humidity ${array32_humidity}%</p>
            </button>
            </div>`;
}
