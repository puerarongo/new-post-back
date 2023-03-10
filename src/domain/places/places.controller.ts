import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { PlacesService } from './places.service';
import GetPlaceDto from './dto/get-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}
  @Post()
  async getAdresses(@Body() body: GetPlaceDto) {
    try {
      return await this.placesService.getAll({
        key: process.env.API_KEY,
        ...body,
      });
    } catch (error) {
      throw new NotFoundException(`${error.message}`, {
        description: 'Some error description',
      });
    }
  }
}
