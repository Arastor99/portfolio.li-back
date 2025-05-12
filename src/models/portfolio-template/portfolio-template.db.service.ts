import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class PortfolioTemplateDbService implements OnModuleInit {
  private readonly logger = new Logger(PortfolioTemplateDbService.name);

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
    where: Prisma.PortfolioTemplateWhereUniqueInput;
    select?: Prisma.PortfolioTemplateSelect | null;
  }) {
    const { where, select } = params;

    return this.handleRequest(
      () => this.prisma.portfolioTemplate.findUnique({ where, select }),
      'Error retrieving portfolioTemplate',
    );
  }

  async findMany(params: {
    where?: Prisma.PortfolioTemplateWhereInput;
    orderBy?: Prisma.PortfolioTemplateOrderByWithRelationInput;
    select?: Prisma.PortfolioTemplateSelect | null;
    take?: number;
    skip?: number;
  }) {
    const { where, orderBy, select, take, skip } = params;

    return this.handleRequest(
      () =>
        this.prisma.portfolioTemplate.findMany({
          where,
          orderBy,
          select,
          take,
          skip,
        }),
      'Error retrieving portfolioTemplates',
    );
  }

  async create(data: Prisma.PortfolioTemplateCreateInput) {
    return this.handleRequest(
      () => this.prisma.portfolioTemplate.create({ data }),
      'Error creating portfolioTemplate',
    );
  }

  async createOrUpdate(params: {
    where: Prisma.PortfolioTemplateWhereUniqueInput;
    data: Prisma.PortfolioTemplateCreateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () =>
        this.prisma.portfolioTemplate.upsert({
          where,
          create: data,
          update: data,
        }),
      'Error creating or updating portfolioTemplate',
    );
  }

  async createOrUpdateMany(
    params: {
      where: Prisma.PortfolioTemplateWhereUniqueInput;
      data: Prisma.PortfolioTemplateCreateInput;
    }[],
  ) {
    return Promise.all(
      params.map(({ where, data }) => this.createOrUpdate({ where, data })),
    );
  }

  async update(params: {
    where: Prisma.PortfolioTemplateWhereUniqueInput;
    data: Prisma.PortfolioTemplateUpdateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.portfolioTemplate.update({ where, data }),
      'Error updating portfolioTemplate',
    );
  }

  async delete(where: Prisma.PortfolioTemplateWhereUniqueInput) {
    return this.handleRequest(
      () => this.prisma.portfolioTemplate.delete({ where }),
      'Error deleting portfolioTemplate',
    );
  }

  async count(where?: Prisma.PortfolioTemplateWhereInput) {
    return this.handleRequest(
      () => this.prisma.portfolioTemplate.count({ where }),
      'Error counting portfolioTemplates',
    );
  }

  //INIT PORTFOLIO TEMPLATES BASE
  TEMPLATES = [
    {
      name: 'default',
      description: 'Default portfolio template',
    },
    {
      name: 'minimal',
      description: 'Minimal portfolio template',
    },
    {
      name: 'detailed',
      description: 'Detailed portfolio template',
    },
  ];

  async onModuleInit() {
    this.logger.log(
      `Initializing ${this.TEMPLATES.length} portfolio templates...`,
    );

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
