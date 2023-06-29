import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokedexService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawPokemon() {
  const pokemon = AppState.pokemon

  let template = ''

  pokemon.forEach(pokemon => {
    template += `
  <li onclick="app.PokedexController.getPokemonDetails('${pokemon.url}')" class="selectable" role="button">${pokemon.name}</li>`
  })

  setHTML('pokemonList', template)
  // console.log('pokemon', template);
  // console.log('draw pokemon', pokemon);
}




function _drawActivePokemon() {
  const pokemon = AppState.activePokemon
  debugger
  // console.log('active pokemon', pokemon);
  setHTML('pokemonDetails', pokemon.CardTemplate)
}


export class PokedexController {
  constructor() {
    console.log('this is the Pokedex controller');
    this.getPokemon()

    AppState.on('activePokemon', _drawActivePokemon)
    AppState.on('pokemon', _drawPokemon)
  }



  async getPokemonDetails(pokemonUrl) {
    console.log('this is the parameter', pokemonUrl);
    try {
      await pokedexService.getPokemonDetails(pokemonUrl)
    } catch (error) {
      console.log(error);
      Pop.error(error.message)

    }
  }


  async getPokemon() {
    try {
      await pokedexService.getPokemon()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)

    }
  }







}




