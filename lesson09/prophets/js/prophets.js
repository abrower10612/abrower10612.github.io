const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let h4 = document.createElement('h4')
      let image = document.createElement('img');

      h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
      h3.innerHTML = `Date of Birth: ${prophet.birthdate}`;
      h4.innerHTML = `Place of Birth: ${prophet.birthplace}`;
      image.setAttribute('src', prophet.imageurl)
      image.setAttribute('alt', `Official Portrait of ${prophet.name} ${prophet.lastname}`);

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(image);

      document.querySelector('.cards').appendChild(card);
    })

  });
