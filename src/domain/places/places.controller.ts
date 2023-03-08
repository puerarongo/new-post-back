import { Controller, Get } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}
  @Get()
  async getAdresses() {
    return await this.placesService.getAll();
  }
}
