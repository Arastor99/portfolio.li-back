import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreatePortfolioDto {
  @IsString()
  templateId: string;

  @IsString()
  url: string;
}

export class UpdatePortfolioDto {
  @IsString()
  @IsOptional()
  templateId?: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
