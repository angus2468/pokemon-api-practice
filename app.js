const form = document.getElementById("form");
const randomPokemon = document.getElementById("randomPokemon");
const informationDisplay = document.getElementById("information");
const audioVolume = document.getElementById("pokemonCry");
audioVolume.volume = 0.2;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

form.addEventListener(`submit`, function (event) {
  event.preventDefault();
  const result = new FormData(form);
  const searchTerm = Object.fromEntries(result);
  console.log(searchTerm.query);
  fetchPokemonInfo(searchTerm.query);
});

randomPokemon.addEventListener("click", function (event) {
  event.preventDefault();
  let randomNumber = getRandomInt(1025);
  fetchPokemonInfoRandom(randomNumber);
});

async function fetchPokemonInfo(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const pokemonJson = await response.json();
  displayType(pokemonJson);
  displayImage(pokemonJson);
  displayCry(pokemonJson);
  displayName(pokemonJson);
}
async function fetchPokemonInfoRandom(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const pokemonJson = await response.json();
  displayType(pokemonJson);
  displayImage(pokemonJson);
  displayCry(pokemonJson);
  displayName(pokemonJson);
}

function displayType(pokemonJson) {
  const pokemonType = document.getElementById("pokemonType");
  pokemonType.innerText = "Type: " + pokemonJson.types[0].type.name;
}

function displayImage(pokemonJson) {
  const pokemonPicture = document.getElementById("pokemonImage");
  pokemonPicture.src = pokemonJson.sprites.front_default;
}

function displayCry(pokemonJson) {
  const pokemonAudio = document.getElementById("pokemonCry");
  pokemonAudio.src = pokemonJson.cries.latest;
  pokemonAudio.play();
}
function displayName(pokemonJson) {
  const pokemonName = document.getElementById("name");
  pokemonName.innerText = "Name: " + pokemonJson.forms[0].name;
}
