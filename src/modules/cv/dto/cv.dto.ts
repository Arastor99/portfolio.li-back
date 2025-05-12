import { IsString } from 'class-validator';

export class CreateCVDto {
  @IsString()
  templateName: string;
}
