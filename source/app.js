
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
    let currentWeather = ((json.main.temp)+(-273.15));
      weather += `
      <div class="current-conditions">
        <h2>Current Conditions : ${json.name}</h2>
        <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" />
        <div class="current">
          <div class="temp">${currentWeather}</div>
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
    let tempOneMax = Math.max((json.list[0].main.temp_max)+(-273.15), (json.list[1].main.temp_max)+(-273.15), (json.list[2].main.temp_max)+(-273.15), (json.list[3].main.temp_max)+(-273.15), (json.list[4].main.temp_max)+(-273.15), (json.list[5].main.temp_max)+(-273.15), (json.list[6].main.temp_max)+(-273.15), (json.list[7].main.temp_max)+(-273.15));

    let tempOneMin =Math.min((json.list[0].main.temp_min)+(-273.15), (json.list[1].main.temp_min)+(-273.15), (json.list[2].main.temp_min)+(-273.15), (json.list[3].main.temp_min)+(-273.15), (json.list[4].main.temp_min)+(-273.15), (json.list[5].main.temp_min)+(-273.15), (json.list[6].main.temp_min)+(-273.15), (json.list[7].main.temp_min)+(-273.15)); 

    let tempTwoMax = Math.max((json.list[8].main.temp_max)+(-273.15), (json.list[9].main.temp_max)+(-273.15), (json.list[10].main.temp_max)+(-273.15), (json.list[11].main.temp_max)+(-273.15), (json.list[12].main.temp_max)+(-273.15), (json.list[13].main.temp_max)+(-273.15), (json.list[14].main.temp_max)+(-273.15), (json.list[15].main.temp_max)+(-273.15));

    let tempTwoMin =Math.min((json.list[8].main.temp_min)+(-273.15), (json.list[9].main.temp_min)+(-273.15), (json.list[10].main.temp_min)+(-273.15), (json.list[11].main.temp_min)+(-273.15), (json.list[12].main.temp_min)+(-273.15), (json.list[13].main.temp_min)+(-273.15), (json.list[14].main.temp_min)+(-273.15), (json.list[15].main.temp_min)+(-273.15)); 

    let tempThreeMax = Math.max((json.list[16].main.temp_max)+(-273.15), (json.list[17].main.temp_max)+(-273.15), (json.list[18].main.temp_max)+(-273.15), (json.list[19].main.temp_max)+(-273.15), (json.list[20].main.temp_max)+(-273.15), (json.list[21].main.temp_max)+(-273.15), (json.list[22].main.temp_max)+(-273.15), (json.list[23].main.temp_max)+(-273.15));

    let tempThreeMin =Math.min((json.list[16].main.temp_min)+(-273.15), (json.list[17].main.temp_min)+(-273.15), (json.list[18].main.temp_min)+(-273.15), (json.list[19].main.temp_min)+(-273.15), (json.list[20].main.temp_min)+(-273.15), (json.list[21].main.temp_min)+(-273.15), (json.list[22].main.temp_min)+(-273.15), (json.list[23].main.temp_min)+(-273.15)); 

    let tempFourMax = Math.max((json.list[24].main.temp_max)+(-273.15), (json.list[25].main.temp_max)+(-273.15), (json.list[26].main.temp_max)+(-273.15), (json.list[27].main.temp_max)+(-273.15), (json.list[28].main.temp_max)+(-273.15), (json.list[29].main.temp_max)+(-273.15), (json.list[30].main.temp_max)+(-273.15), (json.list[31].main.temp_max)+(-273.15));

    let tempFourMin =Math.min((json.list[24].main.temp_min)+(-273.15), (json.list[25].main.temp_min)+(-273.15), (json.list[26].main.temp_min)+(-273.15), (json.list[27].main.temp_min)+(-273.15), (json.list[28].main.temp_min)+(-273.15), (json.list[29].main.temp_min)+(-273.15), (json.list[30].main.temp_min)+(-273.15), (json.list[31].main.temp_min)+(-273.15)); 

    let tempFiveMax = Math.max((json.list[32].main.temp_max)+(-273.15), (json.list[33].main.temp_max)+(-273.15), (json.list[34].main.temp_max)+(-273.15), (json.list[35].main.temp_max)+(-273.15), (json.list[36].main.temp_max)+(-273.15), (json.list[37].main.temp_max)+(-273.15), (json.list[38].main.temp_max)+(-273.15), (json.list[39].main.temp_max)+(-273.15));

    let tempFiveMin =Math.min((json.list[32].main.temp_min)+(-273.15), (json.list[33].main.temp_min)+(-273.15), (json.list[34].main.temp_min)+(-273.15), (json.list[35].main.temp_min)+(-273.15), (json.list[36].main.temp_min)+(-273.15), (json.list[37].main.temp_min)+(-273.15), (json.list[38].main.temp_min)+(-273.15), (json.list[39].main.temp_min)+(-273.15)); 

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
              <span class="high">${tempOneMax}℃</span>/<span class="low">${(json.list[0].main.temp_min)+(-273.15)}℃</span>
            </div>
          </div>
        </div>
        <div class="day">
          <h3>${date2}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[8].weather[0].icon}@2x.png" />
          <div class="description">${json.list[8].weather[0].description}</div>
            <div class="temp">
              <span class="high">${tempTwoMax}℃</span>/<span class="low">${tempTwoMin}℃</span>
            </div>
          </div>
        </div>
        <div class="day">
          <h3>${date3}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[16].weather[0].icon}@2x.png" />
          <div class="description">${json.list[16].weather[0].description}</div>
            <div class="temp">
              <span class="high">${tempThreeMax}℃</span>/<span class="low">${tempThreeMin}℃</span>
            </div>
          </div>
        </div>
        <div class="day">
          <h3>${date4}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[24].weather[0].icon}@2x.png" />
          <div class="description">${json.list[24].weather[0].description}</div>
            <div class="temp">
              <span class="high">${tempFourMax}℃</span>/<span class="low">${tempFourMin}℃</span>
            </div>
          </div>
        </div>
        <div class="day">
          <h3>${date5}</h3>
          <img src="http://openweathermap.org/img/wn/${json.list[32].weather[0].icon}@2x.png" />
          <div class="description">${json.list[32].weather[0].description}</div>
            <div class="temp">
              <span class="high">${tempFiveMax}℃</span>/<span class="low">${tempFiveMin}℃</span>
            </div>
          </div>
        </div>
      </div>
      `;       
      body.innerHTML += forecast;    
  })
}

