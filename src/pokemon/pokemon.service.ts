import { Injectable } from '@nestjs/common';
import { CreatePokemonDto, UpdatePokemonDto, PokemonHelpers } from '@/pokemon';

@Injectable()
export class PokemonService {
  create(createPokemonDto: CreatePokemonDto) {
    return PokemonHelpers.createPokemon(createPokemonDto);
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
