import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class PortfolioDbService {
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
    where: Prisma.PortfolioWhereUniqueInput;
    select?: Prisma.PortfolioSelect | null;
  }) {
    const { where, select } = params;

    return this.handleRequest(
      () => this.prisma.portfolio.findUnique({ where, select }),
      'Error retrieving portfolio',
    );
  }

  async findMany(params: {
    where?: Prisma.PortfolioWhereInput;
    orderBy?: Prisma.PortfolioOrderByWithRelationInput;
    select?: Prisma.PortfolioSelect | null;
    take?: number;
    skip?: number;
  }) {
    const { where, orderBy, select, take, skip } = params;

    return this.handleRequest(
      () =>
        this.prisma.portfolio.findMany({
          where,
          orderBy,
          select,
          take,
          skip,
        }),
      'Error retrieving portfolios',
    );
  }

  async create(data: Prisma.PortfolioCreateInput) {
    return this.handleRequest(
      () => this.prisma.portfolio.create({ data }),
      'Error creating portfolio',
    );
  }

  async createOrUpdate(params: {
    where: Prisma.PortfolioWhereUniqueInput;
    data: Prisma.PortfolioCreateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.portfolio.upsert({ where, create: data, update: data }),
      'Error creating or updating portfolio',
    );
  }

  async update(params: {
    where: Prisma.PortfolioWhereUniqueInput;
    data: Prisma.PortfolioUpdateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.portfolio.update({ where, data }),
      'Error updating portfolio',
    );
  }

  async delete(where: Prisma.PortfolioWhereUniqueInput) {
    return this.handleRequest(
      () => this.prisma.portfolio.delete({ where }),
      'Error deleting portfolio',
    );
  }

  async count(where?: Prisma.PortfolioWhereInput) {
    return this.handleRequest(
      () => this.prisma.portfolio.count({ where }),
      'Error counting portfolios',
    );
  }
}
