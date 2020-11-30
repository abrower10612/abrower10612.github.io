const Currentday = new Date();

const today = Currentday.getDay();

let forecastDayNumber = today;
console.log(forecastDayNumber);

const weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

const apiURL2 = '//api.openweathermap.org/data/2.5/forecast?id=5607916&appid=41d280b70e29802945dee986f145da33&units=imperial';

fetch(apiURL2)
  .then((response) => response.json())
  .then((weatherinfo) => {
    console.log(weatherinfo);

    let mylist = weatherinfo.list;

    let forecastDayNumber = today;

    let townName = document.createElement('span');
    townName.textContent = weatherinfo.city.name + ' Five Day Forecast';
    document.getElementById('townName').appendChild(townName);

      for (i = 0; i < mylist.length; i++) {
        
        let time = mylist[i].dt_txt;
        if (time.includes('18:00:00')) {
          console.log('18:00:00');

          forecastDayNumber += 1;
          if (forecastDayNumber === 7) {
            forecastDayNumber = 0;
          }
          
          let theDayName = document.createElement('span');
          theDayName.textContent = weekday[forecastDayNumber];
          console.log('>' + weekday[forecastDayNumber]);

          let theTemp = document.createElement('p');
          theTemp.textContent = weatherinfo.list[i].main.temp + '\xB0';

          let iconcode = weatherinfo.list[i].weather[0].icon;

          let iconPath = '//openweathermap.org/img/w/' + iconcode + '.png';

          let theIcon = document.createElement('img');

          theIcon.src = iconPath;

          let theDay = document.createElement('div');
          theDay.appendChild(theDayName);
          theDay.appendChild(theTemp);
          theDay.appendChild(theIcon);

          document.getElementById('forecast').appendChild(theDay);
        }
      }
  })

