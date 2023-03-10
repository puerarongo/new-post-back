import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

// * route
import { PlacesModule } from './domain/places/places.module';
import { ConsignmentModule } from './domain/consignment/consignment.module';
config();

const DB_HOST = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.6rke8.mongodb.net/db-post?retryWrites=true&w=majority`;

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
