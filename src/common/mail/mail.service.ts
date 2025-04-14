import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailSendVerificationDto } from './dto/mail.dto';

@Injectable()
export class MailService implements OnModuleInit {
  private readonly logger = new Logger(MailService.name);

  constructor(private readonly mailerService: MailerService) {}

  private async sendMail(options: {
    to: string;
    subject: string;
    templatePath: string;
    context?: Record<string, any>;
  }) {
    const { to, subject, templatePath, context } = options;
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        context,
        template: templatePath,
      });

      this.logger.log(`Email sent: ${to} - ${subject}`);
    } catch (err) {
      this.logger.error('Failed to send email', err);
      throw err;
    }
  }

  async sendVerificationEmail(verificationDto: MailSendVerificationDto) {
    const { to, subject, name, url, supportLink } = verificationDto;

    await this.sendMail({
      to,
      subject,
      templatePath: './email-verification',
      context: {
        name,
        url,
        supportLink,
      },
    });
  }

  async onModuleInit() {
    const testEmail = 'test@example.com'; // Cambia esto por un correo válido para pruebas

    await this.mailerService.sendMail({
      to: testEmail,
      subject: 'Test Email Configuration',
      template: './test-email', // Asegúrate de tener una plantilla básica
    });
    this.logger.log('Email configuration verified successfully.');
  }
}
