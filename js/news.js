const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC  "
];
var day = new Date();


    const apiLink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ed8f54f573954f57a4a72faef844203e`;
    window.fetch(apiLink).then(data=>{
        data.json().then(info=> {
            console.log(info)
           let sports = info.articles;
           let output =[];
           for(let x of sports){
               output +=`
               <a class="anchorhover" href="${x.url}">
               <div class="card card-style mb-5">
               <div class="card-body">
                <h3 class="mb-4" style="width:20%;float:left">${day.getDate()}</h3><h3 class="mb-4">${monthNames[day.getMonth()]}</h3><hr style="background:rgb(173, 172, 172)">
                 <h5 class="card-title  mb-4">${x.title}</h5>
                 <p class="card-text mb-4" style="font-size:15px">${x.description}</p>
                 <img src="${x.urlToImage}" class="card-img-top  mb-4" alt="Image Failed to Load">
               </div>
             </div>
             </a>
               `
               document.getElementById('Left').innerHTML = output;
           }
        
        }).catch(err =>console.log(err))
    }).catch(err =>console.log(err))

    // var day = new Date().getDate();

    // setInterval(()=>{
    //     var time = new Date().toLocaleTimeString();
    //     document.getElementById('time').innerHTML=time;
    // },1000);


    const apiLink2 = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=ed8f54f573954f57a4a72faef844203e`;
    window.fetch(apiLink2).then(data=>{
        data.json().then(info=> {
            console.log(info)
           let sports = info.articles;
           let output =[];
           for(let x of sports){
               output +=`
               <a class="anchorhover" href="${x.url}">
               <div class="card card-style mb-5">
               <div class="card-body">
                <h3 class="mb-4" style="width:20%;float:left">${day.getDate()}</h3><h3 class="mb-4">${monthNames[day.getMonth()]}</h3><hr style="background:rgb(173, 172, 172)">
                 <h5 class="card-title  mb-4">${x.title}</h5>
                 <p class="card-text mb-4" style="font-size:15px">${x.description}</p>
                 <img src="${x.urlToImage}" class="card-img-top  mb-4" alt="Image Failed to Load">
               </div>
             </div>
             </a>
               `
               document.getElementById('Right').innerHTML = output;
           }
        
        }).catch(err =>console.log(err))
    }).catch(err =>console.log(err))
   




var search = document.getElementById('search');
search.addEventListener('keyup', (e) => {
            var stext = e.target.value;
            getWeather(stext);  
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
                <div class="container">
                <div class="weather-side">
                  <div class="weather-gradient"></div>
                  <div class="date-container">
                    <h2 class="date-dayname">Wednesday</h2><span class="date-day">11 Dec 2019</span><i class="location-icon" data-feather="map-pin"></i><span class="location">${report.name}</span><span class="location"> <img class="corrector" src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                    <br><span class="location" style="text-transform:capitalize;">${x.description}</span>
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
                     
                    </ul>
                  </div>
                
                 
                </div>
              </div>
                `
                document.getElementById('Middle').innerHTML = output;
  }        
})
.catch(err =>console.log(err))) 
.catch(err =>console.log(err))
}


const apiLink3 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ed8f54f573954f57a4a72faef844203e`;
window.fetch(apiLink3).then(data=>{
    data.json().then(info=> {
        console.log(info)
       let sports = info.articles;
       let output =[];
       for(let x of sports){
           output +=`
           
           <a class="anchorMiddle" href="${x.url}">
           <div class="container mb-5">
          <div class="newsMiddle">
            <h3 class="mb-4" style="width:20%;float:left">${day.getDate()}</h3><h3 class="mb-4">${monthNames[day.getMonth()]}</h3><hr style="background:rgb(173, 172, 172)">
             <h5 class="card-title  mb-4">${x.title}</h5>
             <p class="card-text mb-4" style="font-size:15px">${x.description}</p>
             <img src="${x.urlToImage}" class="card-img-top mb-4 imageMiddle" alt="Image Failed to Load">
          
         </div>
         </div>
         </a>
         
           `
           document.getElementById('hotnews').innerHTML = output;
       }
    
    }).catch(err =>console.log(err))
}).catch(err =>console.log(err))

