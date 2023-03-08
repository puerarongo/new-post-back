import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Consignment, ConsignmentDocument } from './schema/consignment.schema';

@Injectable()
export class ConsignmentService {
  constructor(
    @InjectModel(Consignment.name)
    private readonly consignmentModel: Model<ConsignmentDocument>,
  ) {}

  getItem() {
    const all = 'Consignment';
    console.log(all);
    return;
  }

  postItem() {
    console.log('post consignment');
  }
}
