import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ConsignmentDocument = Consignment & Document;

@Schema()
export class Consignment {
  id: Types.ObjectId;
}

const ConsignmentSchema = SchemaFactory.createForClass(Consignment);

export { ConsignmentSchema };
