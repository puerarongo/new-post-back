import { Controller, Get } from '@nestjs/common';
import { ConsignmentService } from './consignment.service';

@Controller('consignment')
export class ConsignmentController {
  constructor(private readonly consignmentService: ConsignmentService) {}
  @Get()
  async getConsignment() {
    return await this.consignmentService.getItem();
  }
}
