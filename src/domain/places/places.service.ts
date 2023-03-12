import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place, PlaceDocument } from './schema/places.schema';
import placeRequest from 'src/helpers/placeRequest';
import IPlaceData from 'src/helpers/interface/placeData.interface';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place.name)
    private readonly placeModel: Model<PlaceDocument>,
  ) {}

  async getAll(body) {
    try {
      const { city } = body;
      const findCityDB = await this.placeModel.findOne({
        city: city.toLowerCase(),
      });

      if (findCityDB) {
        return !body.page ? findCityDB : this.getMorePage(findCityDB, body);
      } else {
        const newData = [];
        const req = await placeRequest(body);

        if (req.length <= 0) {
          throw {
            message: `Відділень Нової Пошти в м.${body.city} немає!`,
          };
        }
        req.map(({ SiteKey, Description, ShortAddress }: IPlaceData) => {
          const data = {
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

        return createPlace;
      }
    } catch (err) {
      throw err;
    }
  }

  async getMorePage(result, body) {
    let newData = result.departments.map((el) => JSON.stringify(el));
    const req = await placeRequest(body);

    req.forEach(({ SiteKey, Description, ShortAddress }: IPlaceData) => {
      const data = {
        siteKey: SiteKey,
        description: Description,
        address: ShortAddress,
      };

      if (!newData.includes(JSON.stringify(data))) {
        newData.push(JSON.stringify(data));
      }
    });
    newData = newData.map((el) => JSON.parse(el));

    const updateCity = await this.placeModel.findOneAndUpdate(
      { city: result.city },
      { departments: newData },
      {
        new: true,
      },
    );
    return updateCity;
  }
}
