const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towndata = jsonObject['towns'];
    let towns = towndata.filter(town => (town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs'));
    towns.forEach(town => {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('motto')
      let founded = document.createElement('h3');
      let population = document.createElement('h4')
      let rainfall = document.createElement('h4')
      let img = document.createElement('img');

      name.innerHTML = `${town.name}`;
      motto.innerHTML = `${town.motto}`;
      founded.innerHTML = `Year Founded: ${town.yearFounded}`;
      population.innerHTML = `Population: ${town.currentPopulation}`;
      rainfall.innerHTML = `Average Rainfall: ${town.averageRainfall}`;
      img.setAttribute('src', `images/${town.photo}`);
      img.setAttribute('alt', town.name);

      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(founded);
      card.appendChild(population);
      card.appendChild(rainfall);
      card.appendChild(img);

      document.querySelector('.towns').appendChild(card);
    })
    

  });

