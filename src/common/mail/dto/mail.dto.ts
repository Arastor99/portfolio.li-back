import { IsString } from 'class-validator';

class MailDto {
  @IsString()
  to: string;
  @IsString()
  subject: string;
}

export class MailSendVerificationDto extends MailDto {
  @IsString()
  name: string;

  @IsString()
  url: string;

  @IsString()
  supportLink: string;
}
