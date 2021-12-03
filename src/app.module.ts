import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HobbyModule } from './hobby/hobby.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/first-graphql'),
    PersonModule,
    HobbyModule,
  ],
})
export class AppModule {}
