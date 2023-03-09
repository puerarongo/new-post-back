import { IsString } from 'class-validator';

class GetConsignmentDto {
  @IsString()
  readonly TTN: string;
}

export default GetConsignmentDto;
