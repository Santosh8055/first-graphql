import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { HobbyModule } from './hobby/hobby.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sanmon:lubETLFcnPP3UGBc@sanconnect.uezlb.mongodb.net/first-graphql?retryWrites=true&w=majority',
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    PersonModule,
    HobbyModule,
  ],
})
export class AppModule {}
