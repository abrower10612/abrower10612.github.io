const pricesURL = 'http://abrower10612.github.io/lesson12/data/prices.json'

fetch(pricesURL)
  .then((response) => response.json())
  .then((priceInfo) => {

    document.getElementById('rentType').innerHTML = priceInfo.Metro.Rental;

    document.getElementById('metroMax').innerHTML = priceInfo.Metro.MaxPersons;

    document.getElementById('metroHDR').innerHTML = priceInfo.Metro.Reservation.HalfDay;

    document.getElementById('metroFDR').innerHTML = priceInfo.Metro.Reservation.FullDay;

    document.getElementById('metroHDW').innerHTML = priceInfo.Metro.Reservation.FullDay;

    document.getElementById('metroFDW').innerHTML = priceInfo.Metro.Reservation.FullDay;




  });