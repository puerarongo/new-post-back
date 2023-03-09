import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsignmentController } from './consignment.controller';
import { ConsignmentService } from './consignment.service';
import { Consignment, ConsignmentSchema } from './schema/consignment.schema';

@Module({
  controllers: [ConsignmentController],
  providers: [ConsignmentService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Consignment.name,
        schema: ConsignmentSchema,
      },
    ]),
  ],
})
export class ConsignmentModule {}
