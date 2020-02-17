var search = document.getElementById('search');

search.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        var stext = e.target.value;
        getWeather(stext);
    }
    
})

function getWeather(stext) {
    const apiLink = `http://api.openweathermap.org/data/2.5/weather?q=${stext}&&mode=json&units=metric&APPID=ce2d8cb7624e47d7b07e71774c77bcea`;

    window.fetch(apiLink).then(data=>
        data.json().then(report =>{
            console.log(report)
            console.log(report.main)
            var output =[];
            var weather = report.weather;
            console.log(report);
            for(let x of weather){
                output +=`
                <div class="container"style="    position: relative;
                left: -9px;
                top: 8px;">
                <div class="weather-side">
                  <div class="weather-gradient"></div>
                  <div class="date-container">
                    <h2 class="date-dayname">Wednesday</h2><span class="date-day">11 Dec 2019</span><i class="location-icon" data-feather="map-pin"></i><span class="location">${report.name}</span><span class="location"> <img class="corrector" src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                    <br><span class="location">${x.description}</span>
                  </div>
                  <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
                    <h1 class="weather-temp">${report.main.temp}°C</h1>
                    <h3 class="weather-desc" style="text-transform:capitalize">${report.name}</h3>
                  </div>
                </div>
                <div class="info-side">
                  <div class="today-info-container">
                    <div class="today-info">
                      <div class="precipitation"> <span class="title">PRESSURE</span><span class="value">${report.main.pressure} %</span>
                        <div class="clear"></div>
                      </div>
                      <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">${report.main.humidity} %</span>
                        <div class="clear"></div>
                      </div>
                      <div class="wind"> <span class="title">WIND</span><span class="value">${report.wind.speed} km/h</span>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div class="week-container">
                    <ul class="week-list">
                      <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Wed</span><span class="day-temp">${report.main.temp}°C</span></li>
                      <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">min</span><span class="day-temp">${report.main.temp_min}°C</span></li>
                      <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">max</span><span class="day-temp">${report.main.temp_max}°C</span></li>
                      <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Fry</span><span class="day-temp">19°C</span></li>
                      <div class="clear"></div>
                    </ul>
                  </div>
                  <div class="location-container">
                    <button class="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
                  </div>
                 
                </div>
              </div>
                
                `
                document.getElementById('template').innerHTML = output;

                // <h5 class="card-title">city name :${report.name}</h5>
                // <p class="card-text">Wind speed:</p>
                // <p class="card-text"></p>
                // <p class="card-text"></p>
                // <p class="card-text"></p>
                // <p class="card-text"></p>
                // <p class="card-text"></p>
                // console.log(+" description")
                // console.log(report.wind.speed+" speed")
                // console.log(report.main.temp+ " temperature")
                // console.log(report.main.pressure+ " pressure")
                // console.log(+ " Humidity")
                // console.log(+ " min")
                // console.log(+ " max")
                // console.log();
            }

            
        
        })
        .catch(err =>console.log(err))) 
        .catch(err =>console.log(err))



}