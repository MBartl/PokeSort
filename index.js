let pokemonArray;

// Run the db.json with json-server -> db fetch below
fetch('http://localhost:3000/pokemon')
.then(res => res.json())
.then(allPokemon => shuffleArray(allPokemon));

// Shuffle the Pokemon around (so we can sort them!)
function shuffleArray(allPokemon) {
  allPokemon.sort(() => 0.5 - Math.random());

  pokemonArray = allPokemon;
  display(pokemonArray);
};

// Display the Pokemon
function display(pokemonArray) {
  pokemonArray.forEach(pokemon => {
    const table = document.querySelector('#pokeTable');

    const row = document.createElement('tr');
    row.className = 'content';
    table.appendChild(row);

    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');

    cell1.innerHTML = `<img src=${pokemon.sprite}>`;
    cell2.innerText = pokemon.id;
    cell3.innerText = pokemon.name.english;
    cell4.innerText = pokemon.type.join(', ');
    row.innerHTML += cell1.outerHTML + cell2.outerHTML + cell3.outerHTML + cell4.outerHTML;
  });
};

// Reset the inner HTML of content and send it back to odisplay
function changeTheDisplay(pokemonArray) {
  content = document.querySelectorAll('.content');
  content.forEach(row => row.innerHTML = '');
  display(pokemonArray);
};


// Change by ID
idUp = document.getElementById('idUp');
idUp.addEventListener('click', () => sortByAscendingId());

function sortByAscendingId() {
  pokemonArray.sort((a, b) => a.id - b.id);
  changeTheDisplay(pokemonArray);
};

idDown = document.getElementById('idDown');
idDown.addEventListener('click', () => sortByDescendingId());

function sortByDescendingId() {
  pokemonArray.sort((a, b) => b.id - a.id);
  changeTheDisplay(pokemonArray);
};


// Change by Name
pokeUp = document.getElementById('pokeUp');
pokeUp.addEventListener('click', () => sortByAscendingName());

function sortByAscendingName() {
  pokemonArray.sort((a, b) => a.name.english < b.name.english ? -1 : 1);
  changeTheDisplay(pokemonArray);
};

pokeDown = document.getElementById('pokeDown');
pokeDown.addEventListener('click', () => sortByDescendingName());

function sortByDescendingName() {
  pokemonArray.sort((a, b) => a.name.english < b.name.english ? -1 : 1);
  pokemonArray.reverse();
  changeTheDisplay(pokemonArray);
};
