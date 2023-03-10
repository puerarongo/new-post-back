import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { ConsignmentService } from './consignment.service';
import GetConsignmentDto from './dto/get-consignment.dto';

@Controller('consignment')
export class ConsignmentController {
  constructor(private readonly consignmentService: ConsignmentService) {}

  @Post()
  async getConsignment(@Body() body: GetConsignmentDto) {
    try {
      return await this.consignmentService.getItem({
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
