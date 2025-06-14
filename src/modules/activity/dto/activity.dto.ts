import { IsNumber, IsOptional } from 'class-validator';

export class GetActivityDto {
  @IsNumber()
  offset: number;

  @IsNumber()
  @IsOptional()
  limit?: number;
}
