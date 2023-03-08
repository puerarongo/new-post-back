import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsignmentController } from './consignment.controller';
import { ConsignmentService } from './consignment.service';

@Module({
  controllers: [ConsignmentController],
  providers: [ConsignmentService],
  imports: [],
})
export class ConsignmentModule {}
