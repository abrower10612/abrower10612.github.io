const pricesURL = 'http://abrower10612.github.io/lesson12/data/prices.json'

fetch(pricesURL)
  .then((response) => response.json())
  .then((priceInfo) => {

    // METRO

    document.getElementById('metro').innerHTML = priceInfo.Metro.Rental;

    document.getElementById('metroMax').innerHTML = priceInfo.Metro.MaxPersons;

    document.getElementById('metroHDR').innerHTML = priceInfo.Metro.Reservation.HalfDay;

    document.getElementById('metroFDR').innerHTML = priceInfo.Metro.Reservation.FullDay;

    document.getElementById('metroHDW').innerHTML = priceInfo.Metro.WalkIn.HalfDay;

    document.getElementById('metroFDW').innerHTML = priceInfo.Metro.WalkIn.FullDay;

    // DIO

    document.getElementById('dio').innerHTML = priceInfo.Dio.Rental;

    document.getElementById('dioMax').innerHTML = priceInfo.Dio.MaxPersons;

    document.getElementById('dioHDR').innerHTML = priceInfo.Dio.Reservation.HalfDay;

    document.getElementById('dioFDR').innerHTML = priceInfo.Dio.Reservation.FullDay;

    document.getElementById('dioHDW').innerHTML = priceInfo.Dio.WalkIn.HalfDay;

    document.getElementById('dioFDW').innerHTML = priceInfo.Dio.WalkIn.FullDay;




  });