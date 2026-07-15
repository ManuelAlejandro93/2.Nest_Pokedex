import { CreatePokemonDto } from '@/pokemon';

export class PokemonHelpers {
  public static createPokemon = (createPokemonDto: CreatePokemonDto) => {
    return createPokemonDto;
  };
}
