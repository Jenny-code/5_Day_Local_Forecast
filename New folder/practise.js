
const apiKey = 'f645297c56a0f78e21a1294b90de159c';
let lat;
let lon;
let body = document.querySelector("body");

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log(lat, lon);
})

function getCurrentWeatherForMyLocation() {
  fetch(`https://api.openweathermap.org/data/2.5/forecast.json?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  .then (resp => resp.json())
  .then(json => {
    // insertIntopoiElement(json.features);
  });
}

function getForcastForMyLocation() {

  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  .then(resp => {
    if(resp.ok) {
      return resp.json();
    } else {
      throw new Error("Houston, we have a problem.");
    } 
  })

}

body.textContent = "";
body.insertAdjacentHTML('afterbegin', `
  <main>
    <div class="current-conditions">
      <h2>Current Conditions${coord.sys.country.innerHTML}</h2>
      <img src="http://openweathermap.org/img/wn/${coord.weather.icon.innerHTML}@2x.png" />
      <div class="current">
        <div class="temp">${coord.main.temp.innerHTML}</div>
        <div class="condition">${coord,weather.main.innerHTML}</div>
      </div>
    </div>
    <div class="forecast">
      <div class="day">
        <h3>${}</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" />
        <div class="description">${}</div>
          <div class="temp">
            <span class="high">${}℃</span>/<span class="low">${}℃</span>
          </div>
        </div>
      </div>
      <div class="day">
        <h3>Tuesday</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" />
        <div class="description">clear sky</div>
          <div class="temp">
            <span class="high">11℃</span>/<span class="low">-3℃</span>
          </div>
        </div>
      </div>
      <div class="day">
        <h3>Tuesday</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" />
        <div class="description">clear sky</div>
          <div class="temp">
            <span class="high">11℃</span>/<span class="low">-3℃</span>
          </div>
        </div>
      </div>
      <div class="day">
        <h3>Tuesday</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" />
        <div class="description">clear sky</div>
          <div class="temp">
            <span class="high">11℃</span>/<span class="low">-3℃</span>
          </div>
        </div>
      </div>
      <div class="day">
        <h3>Tuesday</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" />
        <div class="description">clear sky</div>
          <div class="temp">
            <span class="high">11℃</span>/<span class="low">-3℃</span>
          </div>
        </div>
      </div>
    </div>
  </main>
`);