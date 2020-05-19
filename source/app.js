
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
      weather += `<main>
      <div class="current-conditions">
        <h2>Current Conditions${json.name}</h2>
        <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" />
        <div class="current">
          <div class="temp">${json.main.temp}</div>
          <div class="condition">${json.weather[0].description}</div>
        </div>       
      </div>
    </main>`;       


      body.innerHTML = weather;
    
  })
}

