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
  //Array2 data
  array2_datetime,
  array2_weather,
  array2_icon,
  array2_temp,
  array2_feels_like,
  array2_humidity,
  //Array4 data
  array4_datetime,
  array4_weather,
  array4_icon,
  array4_temp,
  array4_feels_like,
  array4_humidity,
  //Array4 data
  array6_datetime,
  array6_weather,
  array6_icon,
  array6_temp,
  array6_feels_like,
  array6_humidity,
  //Array8 data
  array8_datetime,
  array8_weather,
  array8_icon,
  array8_temp,
  array8_feels_like,
  array8_humidity,
  //Array10 data
  array10_datetime,
  array10_weather,
  array10_icon,
  array10_temp,
  array10_feels_like,
  array10_humidity,
  //Array12 data
  array12_datetime,
  array12_weather,
  array12_icon,
  array12_temp,
  array12_feels_like,
  array12_humidity,
  //Array16 data
  array14_datetime,
  array14_weather,
  array14_icon,
  array14_temp,
  array14_feels_like,
  array14_humidity,
  //Array16 data
  array16_datetime,
  array16_weather,
  array16_icon,
  array16_temp,
  array16_feels_like,
  array16_humidity,
  //Array18 data
  array18_datetime,
  array18_weather,
  array18_icon,
  array18_temp,
  array18_feels_like,
  array18_humidity,
  //Array20 data
  array20_datetime,
  array20_weather,
  array20_icon,
  array20_temp,
  array20_feels_like,
  array20_humidity,
  //Array22 data
  array22_datetime,
  array22_weather,
  array22_icon,
  array22_temp,
  array22_feels_like,
  array22_humidity,
  //Array24 data
  array24_datetime,
  array24_weather,
  array24_icon,
  array24_temp,
  array24_feels_like,
  array24_humidity,
  //Array26 data
  array26_datetime,
  array26_weather,
  array26_icon,
  array26_temp,
  array26_feels_like,
  array26_humidity,
  //Array24 data
  array28_datetime,
  array28_weather,
  array28_icon,
  array28_temp,
  array28_feels_like,
  array28_humidity,
  //Array30 data
  array30_datetime,
  array30_weather,
  array30_icon,
  array30_temp,
  array30_feels_like,
  array30_humidity,
  //Array32 data
  array32_datetime,
  array32_weather,
  array32_icon,
  array32_temp,
  array32_feels_like,
  array32_humidity,
  //Array34 data
  array34_datetime,
  array34_weather,
  array34_icon,
  array34_temp,
  array34_feels_like,
  array34_humidity,
  //Array30 data
  array36_datetime,
  array36_weather,
  array36_icon,
  array36_temp,
  array36_feels_like,
  array36_humidity,
  //Array38 data
  array38_datetime,
  array38_weather,
  array38_icon,
  array38_temp,
  array38_feels_like,
  array38_humidity
) {
  return `<div class = "current-weather">
  
  <h2>${location}, ${country}</h2>
  
  <button class = "wf-now">
  <h3>${array0_datetime.toDateString()}</h3>
  <h3>Current weather in 3 hour intervals</h3>
       <p><strong>Until ${array0_datetime.toLocaleTimeString()}</strong></p>
  <h4>${array0_temp}°</h4>
  <div class = "wf-0">

   <img class= "icon-large" src = "https://openweathermap.org/img/wn/${array0_icon}@4x.png">
        <h4>${array0_weather}</h4>
        <p>Feels like ${array0_feels_like}°</p>
        <p>Humidity ${array0_humidity}%</p>
        <!-- <small><a href="https://www.google.com/maps/place/${location},${country}">(View on Google Maps)</a></small> -->
        <h5>Sunrise ${sunrise.toLocaleTimeString()}am</h5>
        <h5>Sunset ${sunset.toLocaleTimeString()}pm</h5>
        </div>
        </button>
        </div>
    
        <div class = "wf">
<h4>Scroll across for this weeks weather forecast</h4>
<ul class = "slider">

<li>
        <button class = "wf-2">
        <h3>${array2_datetime.toDateString()}</h3>
        <p><strong>Until ${array2_datetime.toLocaleTimeString()}</strong></p>
        <h4>${array2_temp}°</h4>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array2_icon}.png">
        <h4>${array2_weather}</h4>
        <p>Feels like ${array2_feels_like}°</p>
        <p>Humidity ${array2_humidity}%</p>
        </button>
        </li>
        <li>
        <button class = "wf-4">
        <h3>${array4_datetime.toDateString()}</h3>
        <p><strong>Until ${array4_datetime.toLocaleTimeString()}</strong></p>
        <h4>${array4_temp}°</h4>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array4_icon}.png">
        <h4>${array4_weather}</h4>
        <p>Feels like ${array4_feels_like}°</p>
        <p>Humidity ${array4_humidity}%</p>
        </button>
        </li>
<li>
        <button class = "wf-6">
        <h3>${array6_datetime.toDateString()}</h3>
        <p><strong>Until ${array6_datetime.toLocaleTimeString()}</strong></p>
        <h4>${array6_temp}°</h4>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array6_icon}.png">
        <h4>${array6_weather}</h4>
        <p>Feels like ${array6_feels_like}°</p>
        <p>Humidity ${array6_humidity}%</p>
        </button>
     </li> 
<li>
        <button class = "wf-8">
        <h3>${array8_datetime.toDateString()}</h3>
        <p><strong>Until ${array8_datetime.toLocaleTimeString()}</strong></p>
        <h4>${array8_temp}°</h4>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array8_icon}.png">
        <h4>${array8_weather}</h4>
        <p>Feels like ${array8_feels_like}°</p>
        <p>Humidity ${array8_humidity}%</p>
        </button>
        </li>
        <li>
        <button class = "wf-10">
        <h3>${array10_datetime.toDateString()}</h3>
        <p><strong>Until ${array10_datetime.toLocaleTimeString()}</strong></p>
        <h4>${array10_temp}°</h4> 
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array10_icon}.png">
        <h4>${array10_weather}</h4> 
        <p>Feels like ${array10_feels_like}°</p>
        <p>Humidity ${array10_humidity}%</p>
        </button>
       </li>
       <li>
       <button class = "wf-12">
       <h3>${array12_datetime.toDateString()}</h3>
       <p><strong>Until ${array12_datetime.toLocaleTimeString()}</strong></p>
       <h4>${array12_temp}°</h4> 
       <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array12_icon}.png">
       <h4>${array12_weather}</h4> 
       <p>Feels like ${array12_feels_like}°</p>
       <p>Humidity ${array12_humidity}%</p>
       </button>
      </li>
      <li>
      <button class = "wf-14">
      <h3>${array14_datetime.toDateString()}</h3>
      <p><strong>Until ${array14_datetime.toLocaleTimeString()}</strong></p>
      <h4>${array14_temp}°</h4> 
      <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array14_icon}.png">
      <h4>${array14_weather}</h4> 
      <p>Feels like ${array14_feels_like}°</p>
      <p>Humidity ${array14_humidity}%</p>
      </button>
     </li>

       <li>
            <button class = "wf-16">
            <h3>${array16_datetime.toDateString()}</h3>
            <p><strong>Until ${array16_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array16_temp}°</h4> 
            <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array16_icon}.png">
            <h4>${array16_weather}</h4> 
            <p>Feels like ${array16_feels_like}°</p>
            <p>Humidity ${array16_humidity}%</p>
            </button>
           </li>
           <li>
           <button class = "wf-18">
           <h3>${array18_datetime.toDateString()}</h3>
           <p><strong>Until ${array18_datetime.toLocaleTimeString()}</strong></p>
           <h4>${array18_temp}°</h4> 
           <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array18_icon}.png">
           <h4>${array18_weather}</h4> 
           <p>Feels like ${array18_feels_like}°</p>
           <p>Humidity ${array18_humidity}%</p>
           </button>
          </li>

          <li>
          <button class = "wf-20">
          <h3>${array20_datetime.toDateString()}</h3>
          <p><strong>Until ${array20_datetime.toLocaleTimeString()}</strong></p>
          <h4>${array20_temp}°</h4>
          <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array20_icon}.png">
          <h4>${array20_weather}</h4> 
          <p>Feels like ${array20_feels_like}°</p>
          <p>Humidity ${array20_humidity}%</p>
          </button>
        </li>

        <li>
          <button class = "wf-22">
          <h3>${array22_datetime.toDateString()}</h3>
          <p><strong>Until ${array22_datetime.toLocaleTimeString()}</strong></p>
          <h4>${array22_temp}°</h4>
          <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array22_icon}.png">
          <h4>${array22_weather}</h4> 
          <p>Feels like ${array22_feels_like}°</p>
          <p>Humidity ${array22_humidity}%</p>
          </button>
        </li>
        <li>
            <button class = "wf-24">
            <h3>${array24_datetime.toDateString()}</h3>
            <p><strong>Until ${array24_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array24_temp}°</h4>
            <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array24_icon}.png">
            <h4>${array24_weather}</h4> 
            <p>Feels like ${array24_feels_like}°</p>
            <p>Humidity ${array24_humidity}%</p>
            </button>
          </li>

          <li>
          <button class = "wf-26">
          <h3>${array26_datetime.toDateString()}</h3>
          <p><strong>Until ${array26_datetime.toLocaleTimeString()}</strong></p>
          <h4>${array26_temp}°</h4>
          <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array26_icon}.png">
          <h4>${array26_weather}</h4> 
          <p>Feels like ${array26_feels_like}°</p>
          <p>Humidity ${array26_humidity}%</p>
          </button>
        </li>

        <li>
        <button class = "wf-28">
        <h3>${array28_datetime.toDateString()}</h3>
        <p><strong>Until ${array28_datetime.toLocaleTimeString()}</strong></p>
        <h4>${array28_temp}°</h4>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array28_icon}.png">
        <h4>${array28_weather}</h4> 
        <p>Feels like ${array28_feels_like}°</p>
        <p>Humidity ${array28_humidity}%</p>
        </button>
      </li>


      <li>
      <button class = "wf-30">
      <h3>${array30_datetime.toDateString()}</h3>
      <p><strong>Until ${array30_datetime.toLocaleTimeString()}</strong></p>
      <h4>${array30_temp}°</h4>
       <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array30_icon}.png">
       <h4>${array30_weather}</h4>
       <p>Feels like ${array30_feels_like}°</p>
       <p>Humidity ${array30_humidity}%</p>
      </button>
      </li>
        <li>
            <button class = "wf-32">
            <h3>${array32_datetime.toDateString()}</h3>
            <p><strong>Until ${array32_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array32_temp}°</h4>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array32_icon}.png">
             <h4>${array32_weather}</h4>
             <p>Feels like ${array32_feels_like}°</p>
             <p>Humidity ${array32_humidity}%</p>
            </button>
            </li>
            <li>
            <button class = "wf-34">
            <h3>${array34_datetime.toDateString()}</h3>
            <p><strong>Until ${array34_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array34_temp}°</h4>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array34_icon}.png">
             <h4>${array34_weather}</h4>
             <p>Feels like ${array34_feels_like}°</p>
             <p>Humidity ${array34_humidity}%</p>
            </button>
            </li>
            <li>
            <button class = "wf-36">
            <h3>${array36_datetime.toDateString()}</h3>
            <p><strong>Until ${array36_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array36_temp}°</h4>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array36_icon}.png">
             <h4>${array36_weather}</h4>
             <p>Feels like ${array36_feels_like}°</p>
             <p>Humidity ${array36_humidity}%</p>
            </button>
            </li>
            <li>
            <button class = "wf-38">
            <h3>${array38_datetime.toDateString()}</h3>
            <p><strong>Until ${array38_datetime.toLocaleTimeString()}</strong></p>
            <h4>${array38_temp}°</h4>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array38_icon}.png">
             <h4>${array38_weather}</h4>
             <p>Feels like ${array38_feels_like}°</p>
             <p>Humidity ${array38_humidity}%</p>
            </button>
            </li>
            </ul>
            </div>`;
}
