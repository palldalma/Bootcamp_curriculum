import { Pokemon } from './Pokemon';

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

let pokemon = chooseEffective(pokemonOfAsh, wildPokemon);
// console.log(`I choose you!,` + pokemon);

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire'),
  ];
}

function chooseEffective(pokemonsOfAsh: Pokemon[], wildPokemon: Pokemon): string {
  let chosenPokemon: Pokemon;

  for (let i = 0; i < pokemonsOfAsh.length; i++) {
    // ternary operator (condition) ? "returned value when true" : "returned value when false";
    if (pokemonsOfAsh[i].isEffectiveAgainst(wildPokemon)) {
      chosenPokemon = pokemonsOfAsh[i];
    }
  }

  return chosenPokemon.name;
}
