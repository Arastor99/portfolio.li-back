import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class ActivityDbService {
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
    where: Prisma.ActivityWhereUniqueInput;
    select?: Prisma.ActivitySelect | null;
  }) {
    const { where, select } = params;

    return this.handleRequest(
      () => this.prisma.activity.findUnique({ where, select }),
      'Error retrieving activity',
    );
  }

  async findMany(params: {
    where?: Prisma.ActivityWhereInput;
    orderBy?: Prisma.ActivityOrderByWithRelationInput;
    select?: Prisma.ActivitySelect | null;
    take?: number;
    skip?: number;
  }) {
    const { where, orderBy, select, take, skip } = params;

    return this.handleRequest(
      () =>
        this.prisma.activity.findMany({
          where,
          orderBy,
          select,
          take,
          skip,
        }),
      'Error retrieving activitys',
    );
  }

  async create(data: Prisma.ActivityCreateInput) {
    return this.handleRequest(
      () => this.prisma.activity.create({ data }),
      'Error creating activity',
    );
  }

  async createOrUpdate(params: {
    where: Prisma.ActivityWhereUniqueInput;
    data: Prisma.ActivityCreateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.activity.upsert({ where, create: data, update: data }),
      'Error creating or updating activity',
    );
  }

  async update(params: {
    where: Prisma.ActivityWhereUniqueInput;
    data: Prisma.ActivityUpdateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.activity.update({ where, data }),
      'Error updating activity',
    );
  }

  async delete(where: Prisma.ActivityWhereUniqueInput) {
    return this.handleRequest(
      () => this.prisma.activity.delete({ where }),
      'Error deleting activity',
    );
  }

  async count(where?: Prisma.ActivityWhereInput) {
    return this.handleRequest(
      () => this.prisma.activity.count({ where }),
      'Error counting activitys',
    );
  }
}
