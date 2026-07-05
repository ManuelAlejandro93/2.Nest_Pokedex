import { join } from 'path'; //propio de node.
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    PokemonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mongo_manuel_instance'),
  ],
})
export class AppModule {}
