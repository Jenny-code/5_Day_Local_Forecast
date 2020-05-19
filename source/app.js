
const apiKey = 'f645297c56a0f78e21a1294b90de159c';
let lat;
let lon;
let body = document.querySelector("body");



navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  onload=getCurrentWeatherForMyLocation()
})

function getCurrentWeatherForMyLocation() {
  console.log(lat, lon);

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  .then(resp => {
    if(resp.ok) {
      return resp.json();
    } else {
      throw new Error("Houston, we have a problem.");
    } 
  })
  .then(json => {
    console.log(json)
    body.innerHtml = "";
    let weather = "";   
      weather += `
      <div class="current-conditions">
        <h2>Current Conditions : ${json.name}</h2>
        <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" />
        <div class="current">
          <div class="temp">${json.main.temp}</div>
          <div class="condition">${json.weather[0].description}</div>
        </div>       
      </div>
      `;       
      body.innerHTML = weather;    
  })
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  .then(resp => {
    if(resp.ok) {
      return resp.json();
    } else {
      throw new Error("Houston, we have a problem.");
    } 
  })
  .then(json => {
    console.log(json)
    let date1 = new Date(json.list[0].dt_txt);
    let date2 = new Date(json.list[8].dt_txt);
    let date3 = new Date(json.list[16].dt_txt);
    let date4 = new Date(json.list[24].dt_txt);
    let date5 = new Date(json.list[32].dt_txt);
    let forecast = "";   
      forecast += `
      <div class="forecast">
        <div class="day">
          <h3>${date1}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[0].weather[0].icon}@2x.png" />
          <div class="description">${json.list[0].weather[0].description}</div>
            <div class="temp">
              <span class="high">${json.list[0].main.temp_max}℃</span>/<span class="low">${json.list[0].main.temp_min}℃</span>
            </div>
          </div>
        </div>
        <div class="day">
          <h3>${date2}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[8].weather[0].icon}@2x.png" />
          <div class="description">${json.list[8].weather[0].description}</div>
            <div class="temp">
              <span class="high">${json.list[0].main.temp_max}℃</span>/<span class="low">${json.list[0].main.temp_min}℃</span>
            </div>
          </div>
        </div>
        <div class="day">
          <h3>${date3}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[16].weather[0].icon}@2x.png" />
          <div class="description">${json.list[16].weather[0].description}</div>
            <div class="temp">
              <span class="high">${json.list[0].main.temp_max}℃</span>/<span class="low">${json.list[0].main.temp_min}℃</span>
            </div>
          </div>
        </div>
        <div class="day">
          <h3>${date4}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[24].weather[0].icon}@2x.png" />
          <div class="description">${json.list[24].weather[0].description}</div>
            <div class="temp">
              <span class="high">${json.list[0].main.temp_max}℃</span>/<span class="low">${json.list[0].main.temp_min}℃</span>
            </div>
          </div>
        </div>
        <div class="day">
          <h3>${date5}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[32].weather[0].icon}@2x.png" />
          <div class="description">${json.list[32].weather[0].description}</div>
            <div class="temp">
              <span class="high">${json.list[0].main.temp_max}℃</span>/<span class="low">${json.list[0].main.temp_min}℃</span>
            </div>
          </div>
        </div>
      </div>
      `;       
      body.innerHTML += forecast;    
  })
}

