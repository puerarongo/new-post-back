import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place, PlaceDocument } from './schema/places.schema';
import placeRequest from 'src/helpers/placeRequest';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place.name)
    private readonly placeModel: Model<PlaceDocument>,
  ) {}

  async getAll(body) {
    const { city } = body;
    console.log('PAGE', body.page);
    const findCityDB = await this.placeModel.findOne({
      city: city.toLowerCase(),
    });

    if (findCityDB) {
      return findCityDB;
    } else {
      const newData = [];
      const req = await placeRequest(body);

      if (req.length <= 0) {
        return {
          message: `There are no branches of Nova Poshta in the city of ${body.city}`,
        };
      }
      req.map(({ SiteKey, Description, ShortAddress }: any) => {
        const data: any = {
          siteKey: SiteKey,
          description: Description,
          address: ShortAddress,
        };
        newData.push(data);
      });

      const createPlace = await this.placeModel.create({
        city: city.toLowerCase(),
        departments: newData,
      });

      console.log('createPlace', createPlace);
      return createPlace;
    }
  }
}
