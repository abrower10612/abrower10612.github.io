const sodaspringsact = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(sodaspringsact)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towndata = jsonObject['towns'];
    let towns = towndata.filter(town => (town.name == 'Soda Springs'));
    towns.forEach(town => {
      let card = document.createElement('section');
      let act0 = document.createElement('h2');
      let act1 = document.createElement('h2');
      let act2 = document.createElement('h2');

      act0.innerHTML = `${town.events[0]}`;
      act1.innerHTML = `${town.events[1]}`;
      act2.innerHTML = `${town.events[2]}`;

      card.appendChild(act0);
      card.appendChild(act1);
      card.appendChild(act2);

      document.querySelector('.sodaspringsact').appendChild(card);
    })
    

  });

