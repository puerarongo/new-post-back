import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema()
export class Place {
  id: Types.ObjectId;
}

const PlaceSchema = SchemaFactory.createForClass(Place);

export { PlaceSchema };
