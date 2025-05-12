import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class CVDbService {
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
    where: Prisma.CVWhereUniqueInput;
    select?: Prisma.CVSelect | null;
  }) {
    const { where, select } = params;

    return this.handleRequest(
      () => this.prisma.cV.findUnique({ where, select }),
      'Error retrieving cV',
    );
  }

  async findMany(params: {
    where?: Prisma.CVWhereInput;
    orderBy?: Prisma.CVOrderByWithRelationInput;
    select?: Prisma.CVSelect | null;
    take?: number;
    skip?: number;
  }) {
    const { where, orderBy, select, take, skip } = params;

    return this.handleRequest(
      () =>
        this.prisma.cV.findMany({
          where,
          orderBy,
          select,
          take,
          skip,
        }),
      'Error retrieving cVs',
    );
  }

  async create(data: Prisma.CVCreateInput) {
    return this.handleRequest(
      () => this.prisma.cV.create({ data }),
      'Error creating cV',
    );
  }

  async createOrUpdate(params: {
    where: Prisma.CVWhereUniqueInput;
    data: Prisma.CVCreateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.cV.upsert({ where, create: data, update: data }),
      'Error creating or updating cV',
    );
  }

  async update(params: {
    where: Prisma.CVWhereUniqueInput;
    data: Prisma.CVUpdateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.cV.update({ where, data }),
      'Error updating cV',
    );
  }

  async delete(where: Prisma.CVWhereUniqueInput) {
    return this.handleRequest(
      () => this.prisma.cV.delete({ where }),
      'Error deleting cV',
    );
  }

  async count(where?: Prisma.CVWhereInput) {
    return this.handleRequest(
      () => this.prisma.cV.count({ where }),
      'Error counting cVs',
    );
  }
}
