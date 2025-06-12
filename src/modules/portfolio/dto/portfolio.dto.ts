import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreatePortfolioDto {
  @IsString()
  templateName: string;
}

export class UpdatePortfolioDto {
  @IsString()
  @IsOptional()
  templateName?: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
