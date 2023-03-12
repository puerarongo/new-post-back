import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Consignment, ConsignmentDocument } from './schema/consignment.schema';
import consignmentRequest from 'src/helpers/consignmentRequest';

@Injectable()
export class ConsignmentService {
  constructor(
    @InjectModel(Consignment.name)
    private readonly consignmentModel: Model<ConsignmentDocument>,
  ) {}

  async getItem(body) {
    try {
      const findTTN = await this.consignmentModel.findOne({
        TTN: body.TTN,
      });

      if (findTTN) {
        return findTTN;
      } else {
        const req = await consignmentRequest(body);
        if (req.length <= 0 || req[0].Status === 'Номер не найден') {
          throw {
            message: `Відправлення з таким номером ТТН не існує: ${body.TTN}`,
          };
        }
        const {
          WarehouseRecipient,
          WarehouseSender,
          CityRecipient,
          CitySender,
          Status,
        } = req[0];

        const createTTN = await this.consignmentModel.create({
          TTN: body.TTN,
          status: Status,
          citySender: CitySender,
          addressSender: WarehouseSender,
          cityRecipient: CityRecipient,
          addressReipient: WarehouseRecipient,
        });

        return createTTN;
      }
    } catch (err) {
      throw err;
    }
  }
}
