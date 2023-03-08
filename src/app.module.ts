import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const DB_HOST = `mongodb+srv://NewPost:EEqspbpOMh7mRtF1@cluster0.6rke8.mongodb.net/db-post?retryWrites=true&w=majority`;

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(DB_HOST),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
