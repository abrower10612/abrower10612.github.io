const pricesURL = require('../data/prices.json')

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

    // PCX150

    document.getElementById('PCX150').innerHTML = priceInfo.PCX150.Rental;

    document.getElementById('PCX150Max').innerHTML = priceInfo.PCX150.MaxPersons;

    document.getElementById('PCX150HDR').innerHTML = priceInfo.PCX150.Reservation.HalfDay;

    document.getElementById('PCX150FDR').innerHTML = priceInfo.PCX150.Reservation.FullDay;

    document.getElementById('PCX150HDW').innerHTML = priceInfo.PCX150.WalkIn.HalfDay;

    document.getElementById('PCX150FDW').innerHTML = priceInfo.PCX150.WalkIn.FullDay;

    // PIONEER

    document.getElementById('Pioneer').innerHTML = priceInfo.Pioneer.Rental;

    document.getElementById('PioneerMax').innerHTML = priceInfo.Pioneer.MaxPersons;

    document.getElementById('PioneerHDR').innerHTML = priceInfo.Pioneer.Reservation.HalfDay;

    document.getElementById('PioneerFDR').innerHTML = priceInfo.Pioneer.Reservation.FullDay;

    document.getElementById('PioneerHDW').innerHTML = priceInfo.Pioneer.WalkIn.HalfDay;

    document.getElementById('PioneerFDW').innerHTML = priceInfo.Pioneer.WalkIn.FullDay;

    // FOURDOOR

    document.getElementById('FourDoor').innerHTML = priceInfo.FourDoor.Rental;

    document.getElementById('FourDoorMax').innerHTML = priceInfo.FourDoor.MaxPersons;

    document.getElementById('FourDoorHDR').innerHTML = priceInfo.FourDoor.Reservation.HalfDay;

    document.getElementById('FourDoorFDR').innerHTML = priceInfo.FourDoor.Reservation.FullDay;

    document.getElementById('FourDoorHDW').innerHTML = priceInfo.FourDoor.WalkIn.HalfDay;

    document.getElementById('FourDoorFDW').innerHTML = priceInfo.FourDoor.WalkIn.FullDay;

    // TWODOOR

    document.getElementById('TwoDoor').innerHTML = priceInfo.TwoDoor.Rental;

    document.getElementById('TwoDoorMax').innerHTML = priceInfo.TwoDoor.MaxPersons;

    document.getElementById('TwoDoorHDR').innerHTML = priceInfo.TwoDoor.Reservation.HalfDay;

    document.getElementById('TwoDoorFDR').innerHTML = priceInfo.TwoDoor.Reservation.FullDay;

    document.getElementById('TwoDoorHDW').innerHTML = priceInfo.TwoDoor.WalkIn.HalfDay;

    document.getElementById('TwoDoorFDW').innerHTML = priceInfo.TwoDoor.WalkIn.FullDay;

  });