import { Controller, Post, Body } from '@nestjs/common';
import { PlacesService } from './places.service';
import GetPlaceDto from './dto/get-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}
  @Post()
  async getAdresses(@Body() body: GetPlaceDto) {
    return await this.placesService.getAll({
      key: process.env.API_KEY,
      ...body,
    });
  }
}
