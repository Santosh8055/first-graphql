import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Hobby } from './hobby.model';
import { Document, Schema as MongooseSchema } from 'mongoose';
@Schema()
export class Person {
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Hobby.name })
  hobbies: MongooseSchema.Types.ObjectId[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
