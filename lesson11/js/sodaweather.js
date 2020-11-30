//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=41d280b70e29802945dee986f145da33"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.

    // document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currently').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('chill').innerHTML = weatherInfo.main.feels_like;



  }); //end of "then" fat arrow function



