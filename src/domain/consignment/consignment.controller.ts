import { Controller, Post, Body } from '@nestjs/common';
import { ConsignmentService } from './consignment.service';
import GetConsignmentDto from './dto/get-consignment.dto';

@Controller('consignment')
export class ConsignmentController {
  constructor(private readonly consignmentService: ConsignmentService) {}

  @Post()
  async getConsignment(@Body() body: GetConsignmentDto) {
    return await this.consignmentService.getItem({
      key: process.env.API_KEY,
      ...body,
    });
  }
}
