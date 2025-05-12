import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class CVTemplateDbService implements OnModuleInit {
  private readonly logger = new Logger(CVTemplateDbService.name);

  constructor(private readonly prisma: PrismaService) {}

  private async handleRequest<T>(
    callback: () => Promise<T>,
    errorMessage: string,
  ): Promise<T> {
    try {
      return await callback();
    } catch (error) {
      throw new Error(`${errorMessage}: ${error.message}`);
    }
  }

  async findOne(params: {
    where: Prisma.CVTemplateWhereUniqueInput;
    select?: Prisma.CVTemplateSelect | null;
  }) {
    const { where, select } = params;

    return this.handleRequest(
      () => this.prisma.cVTemplate.findUnique({ where, select }),
      'Error retrieving cVTemplate',
    );
  }

  async findMany(params: {
    where?: Prisma.CVTemplateWhereInput;
    orderBy?: Prisma.CVTemplateOrderByWithRelationInput;
    select?: Prisma.CVTemplateSelect | null;
    take?: number;
    skip?: number;
  }) {
    const { where, orderBy, select, take, skip } = params;

    return this.handleRequest(
      () =>
        this.prisma.cVTemplate.findMany({
          where,
          orderBy,
          select,
          take,
          skip,
        }),
      'Error retrieving cVTemplates',
    );
  }

  async create(data: Prisma.CVTemplateCreateInput) {
    return this.handleRequest(
      () => this.prisma.cVTemplate.create({ data }),
      'Error creating cVTemplate',
    );
  }

  async createOrUpdate(params: {
    where: Prisma.CVTemplateWhereUniqueInput;
    data: Prisma.CVTemplateCreateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () =>
        this.prisma.cVTemplate.upsert({ where, create: data, update: data }),
      'Error creating or updating cVTemplate',
    );
  }

  async createOrUpdateMany(
    params: {
      where: Prisma.CVTemplateWhereUniqueInput;
      data: Prisma.CVTemplateCreateInput;
    }[],
  ) {
    return Promise.all(
      params.map(({ where, data }) => this.createOrUpdate({ where, data })),
    );
  }

  async update(params: {
    where: Prisma.CVTemplateWhereUniqueInput;
    data: Prisma.CVTemplateUpdateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.cVTemplate.update({ where, data }),
      'Error updating cVTemplate',
    );
  }

  async delete(where: Prisma.CVTemplateWhereUniqueInput) {
    return this.handleRequest(
      () => this.prisma.cVTemplate.delete({ where }),
      'Error deleting cVTemplate',
    );
  }

  async count(where?: Prisma.CVTemplateWhereInput) {
    return this.handleRequest(
      () => this.prisma.cVTemplate.count({ where }),
      'Error counting cVTemplates',
    );
  }

  //INIT CV TEMPLATES BASE
  TEMPLATES = [
    {
      name: 'default',
      description: 'Default CV template',
    },
    {
      name: 'minimal',
      description: 'Minimal CV template',
    },
    {
      name: 'detailed',
      description: 'Detailed CV template',
    },
  ];

  async onModuleInit() {
    this.logger.log(`Initializing ${this.TEMPLATES.length} cv templates...`);

    await this.createOrUpdateMany(
      this.TEMPLATES.map((template) => ({
        where: { name: template.name },
        data: {
          name: template.name,
          description: template.description,
        },
      })),
    );
  }
}
