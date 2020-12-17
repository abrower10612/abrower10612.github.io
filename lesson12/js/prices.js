const pricesURL = 'http://abrower10612.github.io/lesson12/data/prices.json'

fetch(pricesURL)
  .then((response) => response.json())
  .then((priceInfo) => {

    console.log(priceInfo.FourDoor.MaxPersons)

    let metroMax = priceInfo.HondaMetroScooter.MaxPersons

    console.log(metroMax)

    document.getElementById('rentType').innerHTML = priceInfo.Metro.Rental;

  });