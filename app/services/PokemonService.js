import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokedexApi } from "./AxiosService.js";



class PokemonService {


  async getPokemonDetails(pokemonUrl) {
    const res = await pokedexApi.get(pokemonUrl)
    console.log('got pokemon details', res.data);

    const newPokemon = new Pokemon(res.data)
    AppState.activePokemon = newPokemon

    console.log('pokemon results', AppState.pokemon);

  }

  async getPokemon() {
    const res = await pokedexApi.get('api/v2/pokemon/')
    console.log('got pokemon', res.data);
    AppState.pokemon = res.data.results
  }


}

export const pokedexService = new PokemonService()