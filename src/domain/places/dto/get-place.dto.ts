import { IsString, IsNumber, IsOptional } from 'class-validator';

class GetPlaceDto {
  @IsString()
  readonly city: string;
  @IsNumber()
  @IsOptional()
  readonly page?: number;
}

export default GetPlaceDto;
