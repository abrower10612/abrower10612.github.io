const alertURL = 'http://api.openweathermap.org/data/3.0/triggers'


fetch(alertURL)
  .then((response) => response.json())
  .then((alertInfo) => {

  console.log(alertInfo)

  });