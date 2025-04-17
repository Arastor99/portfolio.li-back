import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production').required(),
  PORT: Joi.number().default(3001),

  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('24h'),
  JWT_MAIL_VERIFICATION_SECRET: Joi.string().required(),
  JWT_MAIL_VERIFICATION_EXPIRES_IN: Joi.string().default('1d'),

  DATABASE_URL: Joi.string().required(),

  MAIL_HOST: Joi.string().required(),
  MAIL_PORT: Joi.number().required(),
  MAIL_SECURE: Joi.boolean().default(false),
  MAIL_USER: Joi.string().required(),
  MAIL_PASS: Joi.string().required(),
  MAIL_FROM: Joi.string().default('From development <development@localhost>'),

  PROFILE_EXTRACTION_API_KEY: Joi.string().required(),
  PROFILE_EXTRACTION_API_URL: Joi.string().required(),

  CLIENT_URL: Joi.string().required(),
});
