import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ConsignmentDocument = Consignment & Document;

@Schema()
export class Consignment {
  id: Types.ObjectId;

  @Prop({ type: String, required: true })
  TTN: string;

  @Prop({ type: String, required: true })
  status: string;

  @Prop({ type: String, required: true })
  citySender: string;

  @Prop({ type: String, required: true })
  addressSender: string;

  @Prop({ type: String, required: true })
  cityRecipient: string;

  @Prop({ type: String, required: true })
  addressReipient: string;
}

const ConsignmentSchema = SchemaFactory.createForClass(Consignment);

export { ConsignmentSchema };
