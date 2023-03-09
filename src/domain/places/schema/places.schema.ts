import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema({ _id: false })
export class DepartmentData {
  @Prop({ type: String, required: true })
  siteKey: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  address: string;
}

const DepartmentDataSchema = SchemaFactory.createForClass(DepartmentData);

@Schema()
export class Place {
  id: Types.ObjectId;

  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: [DepartmentDataSchema], required: true })
  departments: DepartmentData[];
}

const PlaceSchema = SchemaFactory.createForClass(Place);

export { PlaceSchema };
