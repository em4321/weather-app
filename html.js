export function getHtml(
  country,
  location,
  dayNow,
  dateNow,
  monthNow,
  sunrise,
  sunset,
  //Array0 data
  array0_datetime,
  array0_day,
  array0_temp_max,
  array0_temp_min,
  array0_weather,
  array0_icon,
  array0_temp,
  array0_feels_like,
  array0_humidity,
  array0_wind_speed,
  //Array2 data
  array2_datetime,
  array2_day,
  array2_temp_max,
  array2_temp_min,
  array2_weather,
  array2_icon,
  array2_temp,
  array2_feels_like,
  array2_humidity,
  array2_wind_speed,
  //Array4 data
  array4_datetime,
  array4_day,
  array4_temp_max,
  array4_temp_min,
  array4_weather,
  array4_icon,
  array4_temp,
  array4_feels_like,
  array4_humidity,
  array4_wind_speed,
  //Array4 data
  array6_datetime,
  array6_day,
  array6_temp_max,
  array6_temp_min,
  array6_weather,
  array6_icon,
  array6_temp,
  array6_feels_like,
  array6_humidity,
  array6_wind_speed,
  //Array8 data
  array8_datetime,
  array8_day,
  array8_temp_max,
  array8_temp_min,
  array8_weather,
  array8_icon,
  array8_temp,
  array8_feels_like,
  array8_humidity,
  array8_wind_speed,
  //Array10 data
  array10_datetime,
  array10_day,
  array10_temp_max,
  array10_temp_min,
  array10_weather,
  array10_icon,
  array10_temp,
  array10_feels_like,
  array10_humidity,
  array10_wind_speed,
  //Array12 data
  array12_datetime,
  array12_day,
  array12_temp_max,
  array12_temp_min,
  array12_weather,
  array12_icon,
  array12_temp,
  array12_feels_like,
  array12_humidity,
  array12_wind_speed,
  //Array16 data
  array14_datetime,
  array14_day,
  array14_temp_max,
  array14_temp_min,
  array14_weather,
  array14_icon,
  array14_temp,
  array14_feels_like,
  array14_humidity,
  array14_wind_speed,
  //Array16 data
  array16_datetime,
  array16_day,
  array16_temp_max,
  array16_temp_min,
  array16_weather,
  array16_icon,
  array16_temp,
  array16_feels_like,
  array16_humidity,
  array16_wind_speed,
  //Array18 data
  array18_datetime,
  array18_day,
  array18_temp_max,
  array18_temp_min,
  array18_weather,
  array18_icon,
  array18_temp,
  array18_feels_like,
  array18_humidity,
  array18_wind_speed,
  //Array20 data
  array20_datetime,
  array20_day,
  array20_temp_max,
  array20_temp_min,
  array20_weather,
  array20_icon,
  array20_temp,
  array20_feels_like,
  array20_humidity,
  array20_wind_speed,
  //Array22 data
  array22_datetime,
  array22_day,
  array22_temp_max,
  array22_temp_min,
  array22_weather,
  array22_icon,
  array22_temp,
  array22_feels_like,
  array22_humidity,
  array22_wind_speed,
  //Array24 data
  array24_datetime,
  array24_day,
  array24_temp_max,
  array24_temp_min,
  array24_weather,
  array24_icon,
  array24_temp,
  array24_feels_like,
  array24_humidity,
  array24_wind_speed,
  //Array26 data
  array26_datetime,
  array26_day,
  array26_temp_max,
  array26_temp_min,
  array26_weather,
  array26_icon,
  array26_temp,
  array26_feels_like,
  array26_humidity,
  array26_wind_speed,
  //Array24 data
  array28_datetime,
  array28_day,
  array28_temp_max,
  array28_temp_min,
  array28_weather,
  array28_icon,
  array28_temp,
  array28_feels_like,
  array28_humidity,
  array28_wind_speed,
  //Array30 data
  array30_datetime,
  array30_day,
  array30_temp_max,
  array30_temp_min,
  array30_weather,
  array30_icon,
  array30_temp,
  array30_feels_like,
  array30_humidity,
  array30_wind_speed,
  //Array32 data
  array32_datetime,
  array32_day,
  array32_temp_max,
  array32_temp_min,
  array32_weather,
  array32_icon,
  array32_temp,
  array32_feels_like,
  array32_humidity,
  array32_wind_speed,
  //Array34 data
  array34_datetime,
  array34_day,
  array34_temp_max,
  array34_temp_min,
  array34_weather,
  array34_icon,
  array34_temp,
  array34_feels_like,
  array34_humidity,
  array34_wind_speed,
  //Array30 data
  array36_datetime,
  array36_day,
  array36_temp_max,
  array36_temp_min,
  array36_weather,
  array36_icon,
  array36_temp,
  array36_feels_like,
  array36_humidity,
  array36_wind_speed,
  //Array38 data
  array38_datetime,
  array38_day,
  array38_temp_max,
  array38_temp_min,
  array38_weather,
  array38_icon,
  array38_temp,
  array38_feels_like,
  array38_humidity,
  array38_wind_speed
) {
  return `<div class = "current-weather">
  <h2>${location}, ${country}</h2>
  <h2>${dayNow}</h2>
  <h2>${dateNow} ${monthNow}</h2>
   <div class = "wf-0">

  <h2>Max: ${array0_temp_max}°</h2>
  <h2>Min: ${array0_temp_min}°</h2>
  <h1>${array0_weather}<h1>
  <img class= "icon-large" src = "https://openweathermap.org/img/wn/${array0_icon}@4x.png">

        <h3>Approx. ${array0_temp}° from now until ${array0_datetime.toLocaleTimeString()} on ${array0_day}</h3>
        <h3>Feels like ${array0_feels_like}°</h3>
        <h3>Humidity ${array0_humidity}%</h3>
        <h3>Wind Speed ${array0_wind_speed}m/s</h3>
        <h3>Sunrise: ${sunrise.toLocaleTimeString()}am</h3>
        <h3>Sunset: ${sunset.toLocaleTimeString()}pm</h3>
        </div>
        
        </div>
        
        <div class = "wf">
<h4>Scroll across for this weeks weather forecast</h4>

<ul class = "slider">

<li><button class = "wf-2">
        <h4>${array2_day} - approx. ${array2_datetime.toLocaleTimeString()}</h4>
        <h3>${array2_temp_max}° / ${array2_temp_min}°</h3>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array2_icon}.png">
        <h4>Approx. ${array2_temp}° with ${array2_weather}</h4>
        <h5>Feels like ${array2_feels_like}°</h5>
        <h5>Humidity ${array2_humidity}%</h5>
        <h5>Wind Speed ${array2_wind_speed}m/s</h5>
        </button>
        </li>
        
<li><button class = "wf-4">
        <h4>${array4_day} - approx. ${array4_datetime.toLocaleTimeString()}</h4>
        <h3>${array4_temp_max}° / ${array4_temp_min}°</h3>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array4_icon}.png">
        <h4>Approx. ${array4_temp}° with ${array4_weather}</h4>
        <h5>Feels like ${array4_feels_like}°</h5>
        <h5>Humidity ${array4_humidity}%</h5>
        <h5>Wind Speed ${array4_wind_speed}m/s</h5>
        </button>
        </li>

<li><button class = "wf-6">
        <h4>${array6_day} - approx. ${array6_datetime.toLocaleTimeString()}</h4>
        <h3>${array6_temp_max}° / ${array6_temp_min}°</h3>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array6_icon}.png">
        <h4>Approx. ${array6_temp}° with ${array6_weather}</h4>
        <h5>Feels like ${array6_feels_like}°</h5>
        <h5>Humidity ${array6_humidity}%</h5>
        <h5>Wind Speed ${array6_wind_speed}m/s</h5>
        </button>
        </li>

<li><button class = "wf-8">
        <h4>${array8_day} - approx. ${array8_datetime.toLocaleTimeString()}</h4>
        <h3>${array8_temp_max}° / ${array8_temp_min}°</h3>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array8_icon}.png">
        <h4>Approx. ${array8_temp}° with ${array8_weather}</h4>
        <h5>Feels like ${array8_feels_like}°</h5>
        <h5>Humidity ${array8_humidity}%</h5>
        <h5>Wind Speed ${array8_wind_speed}m/s</h5>
        </button>
        </li>

<li><button class = "wf-10">
        <h4>${array10_day} - approx. ${array10_datetime.toLocaleTimeString()}</h4>
        <h3>${array10_temp_max}° / ${array10_temp_min}°</h3>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array10_icon}.png">
        <h4>Approx. ${array10_temp}° with ${array10_weather}</h4>
        <h5>Feels like ${array10_feels_like}°</h5>
        <h5>Humidity ${array10_humidity}%</h5>
        <h5>Wind Speed ${array10_wind_speed}m/s</h5>
        </button>
       </li>

<li><button class = "wf-12">
       <h4>${array12_day} - approx. ${array12_datetime.toLocaleTimeString()}</h4>
       <h3>${array12_temp_max}° / ${array12_temp_min}°</h3>
       <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array12_icon}.png">
       <h4>Approx. ${array12_temp}° with ${array12_weather}</h4>
       <h5>Feels like ${array12_feels_like}°</h5>
       <h5>Humidity ${array12_humidity}%</h5>
       <h5>Wind Speed ${array12_wind_speed}m/s</h5>
       </button>
      </li>

<li><button class = "wf-14">
      <h4>${array14_day} - approx. ${array14_datetime.toLocaleTimeString()}</h4>
      <h3>${array14_temp_max}° / ${array14_temp_min}°</h3>
      <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array14_icon}.png">
      <h4>Approx. ${array14_temp}° with ${array14_weather}</h4>
       <h5>Feels like ${array14_feels_like}°</h5>
       <h5>Humidity ${array14_humidity}%</h5>
       <h5>Wind Speed ${array14_wind_speed}m/s</h5>
      </button>
     </li>

<li><button class = "wf-16">
            <h4>${array16_day} - approx. ${array16_datetime.toLocaleTimeString()}</h4></h3>
            <h3>${array16_temp_max}° / ${array16_temp_min}°</h3>
            <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array16_icon}.png">
            <h4>Approx. ${array16_temp}° with ${array16_weather}</h4>
       <h5>Feels like ${array16_feels_like}°</h5>
       <h5>Humidity ${array16_humidity}%</h5>
       <h5>Wind Speed ${array16_wind_speed}m/s</h5>
            </button>
           </li>

<li><button class = "wf-18">
           <h4>${array18_day} - approx. ${array18_datetime.toLocaleTimeString()}</h4>
           <h3>${array18_temp_max}° / ${array18_temp_min}°</h3>
           <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array18_icon}.png">
           <h4>Approx. ${array18_temp}° with ${array18_weather}</h4>
       <h5>Feels like ${array18_feels_like}°</h5>
       <h5>Humidity ${array18_humidity}%</h5>
       <h5>Wind Speed ${array18_wind_speed}m/s</h5>
           </button>
          </li>

<li><button class = "wf-20">
          <h4>${array20_day} - approx. ${array20_datetime.toLocaleTimeString()}</h4>
          <h3>${array20_temp_max}° / ${array20_temp_min}°</h3>
          <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array20_icon}.png">
          <h4>Approx. ${array20_temp}° with ${array20_weather}</h4>
       <h5>Feels like ${array20_feels_like}°</h5>
       <h5>Humidity ${array20_humidity}%</h5>
       <h5>Wind Speed ${array20_wind_speed}m/s</h5>
          </button>
        </li>

<li><button class = "wf-22">
          <h4>${array22_day} - approx. ${array22_datetime.toLocaleTimeString()}</h4>
          <h3>${array22_temp_max}° / ${array22_temp_min}°</h3>
          <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array22_icon}.png">
          <h4>Approx. ${array22_temp}° with ${array22_weather}</h4>
       <h5>Feels like ${array22_feels_like}°</h5>
       <h5>Humidity ${array22_humidity}%</h5>
       <h5>Wind Speed ${array22_wind_speed}m/s</h5>
          </button>
        </li>

<li><button class = "wf-24">
            <h4>${array24_day} - approx. ${array24_datetime.toLocaleTimeString()}</h4>
            <h3>${array24_temp_max}° / ${array24_temp_min}°</h3>
            <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array24_icon}.png">
            <h4>Approx. ${array24_temp}° with ${array24_weather}</h4>
       <h5>Feels like ${array24_feels_like}°</h5>
       <h5>Humidity ${array24_humidity}%</h5>
       <h5>Wind Speed ${array24_wind_speed}m/s</h5>
            </button>
          </li>

<li><button class = "wf-26">
          <h4>${array26_day} - approx. ${array26_datetime.toLocaleTimeString()}</h4>
          <h3>${array26_temp_max}° / ${array26_temp_min}°</h3>
          <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array26_icon}.png">
          <h4>Approx. ${array26_temp}° with ${array26_weather}</h4>
       <h5>Feels like ${array26_feels_like}°</h5>
       <h5>Humidity ${array26_humidity}%</h5>
       <h5>Wind Speed ${array26_wind_speed}m/s</h5>
          </button>
        </li>

<li><button class = "wf-28">
        <h4>${array28_day} - approx. ${array28_datetime.toLocaleTimeString()}</h4>
        <h3>${array28_temp_max}° / ${array28_temp_min}°</h3>
        <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array28_icon}.png">
        <h4>Approx. ${array28_temp}° with ${array28_weather}</h4>
       <h5>Feels like ${array28_feels_like}°</h5>
       <h5>Humidity ${array28_humidity}%</h5>
       <h5>Wind Speed ${array28_wind_speed}m/s</h5>
        </button>
      </li>

<li><button class = "wf-30">
      <h4>${array30_day} - approx. ${array30_datetime.toLocaleTimeString()}</h4>
      <h3>${array30_temp_max}° / ${array30_temp_min}°</h3>
       <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array30_icon}.png">
       <h4>Approx. ${array30_temp}° with ${array30_weather}</h4>
       <h5>Feels like ${array30_feels_like}°</h5>
       <h5>Humidity ${array30_humidity}%</h5>
       <h5>Wind Speed ${array30_wind_speed}m/s</h5>
      </button>
      </li>

<li><button class = "wf-32">
            <h4>${array32_day} - approx. ${array32_datetime.toLocaleTimeString()}</h4>
            <h3>${array32_temp_max}° / ${array32_temp_min}°</h3>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array32_icon}.png">
             <h4>Approx. ${array32_temp}° with ${array32_weather}</h4>
       <h5>Feels like ${array32_feels_like}°</h5>
       <h5>Humidity ${array32_humidity}%</h5>
       <h5>Wind Speed ${array32_wind_speed}m/s</h5>
            </button>
            </li>

<li><button class = "wf-34">
            <h4>${array34_day} - approx. ${array34_datetime.toLocaleTimeString()}</h4>
            <h3>${array34_temp_max}° / ${array34_temp_min}°</h3>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array34_icon}.png">
             <h4>Approx. ${array34_temp}° with ${array34_weather}</h4>
       <h5>Feels like ${array34_feels_like}°</h5>
       <h5>Humidity ${array34_humidity}%</h5>
       <h5>Wind Speed ${array34_wind_speed}m/s</h5>
            </button>
            </li>

<li><button class = "wf-36">
            <h4>${array36_day} - approx. ${array36_datetime.toLocaleTimeString()}</h4>
            <h3>${array36_temp_max}° / ${array36_temp_min}°</h3>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array36_icon}.png">
             <h4>Approx. ${array36_temp}° with ${array36_weather}</h4>
       <h5>Feels like ${array36_feels_like}°</h5>
       <h5>Humidity ${array36_humidity}%</h5>
       <h5>Wind Speed ${array36_wind_speed}m/s</h5>
            </button>
            </li>

<li><button class = "wf-38">
            <h4>${array38_day} - approx. ${array38_datetime.toLocaleTimeString()}</h4>
            <h3>${array38_temp_max}° / ${array38_temp_min}°</h3>
             <img class= "wf-icon" src = "https://openweathermap.org/img/wn/${array38_icon}.png">
             <h4>Approx. ${array38_temp}° with ${array38_weather}</h4>
       <h5>Feels like ${array38_feels_like}°</h5>
       <h5>Humidity ${array38_humidity}%</h5>
       <h5>Wind Speed ${array38_wind_speed}m/s</h5>
            </button>
            </li>
            </ul>
            </div>`;
}
