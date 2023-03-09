import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { Place, PlaceSchema } from './schema/places.schema';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Place.name,
        schema: PlaceSchema,
      },
    ]),
  ],
})
export class PlacesModule {}
