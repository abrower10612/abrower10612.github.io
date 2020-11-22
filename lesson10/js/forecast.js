const apiURL2 = '//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=41d280b70e29802945dee986f145da33&units=imperial';

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.city.name);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    console.log(forecast);

    let day = 0;

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    forecast.forEach(x => {
      const d = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
      
      const iconcode = jsObject.weather[0].icon;
      // console.log(iconcode);
  
      const icon_path = '//openweathermap.org/img/w/' + iconcode + '.png';
      // console.log(icon_path);
  
      document.getElementById('weather_icon').src = icon_path;      
      
      day++;
    })

  }); 