import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// * route
import { PlacesModule } from './domain/places/places.module';
import { ConsignmentModule } from './domain/consignment/consignment.module';

const DB_HOST = `mongodb+srv://NewPost:EEqspbpOMh7mRtF1@cluster0.6rke8.mongodb.net/db-post?retryWrites=true&w=majority`;

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(DB_HOST),
    PlacesModule,
    ConsignmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
