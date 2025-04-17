import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class ProfileDbService {
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
    where: Prisma.ProfileWhereUniqueInput;
    select?: Prisma.ProfileSelect | null;
    include?: Prisma.ProfileInclude | null;
  }) {
    const { where, select, include } = params;

    if (select && include)
      throw new Error('Cannot use both select and include at the same time');

    return this.handleRequest(
      () =>
        this.prisma.profile.findUnique({
          where,
          ...(select ? { select } : include ? { include } : {}),
        }),
      'Error retrieving profile',
    );
  }

  async findMany(params: {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput;
    select?: Prisma.ProfileSelect | null;
    take?: number;
    skip?: number;
  }) {
    const { where, orderBy, select, take, skip } = params;

    return this.handleRequest(
      () =>
        this.prisma.profile.findMany({
          where,
          orderBy,
          select,
          take,
          skip,
        }),
      'Error retrieving profiles',
    );
  }

  async create(data: Prisma.ProfileCreateInput) {
    return this.handleRequest(
      () => this.prisma.profile.create({ data }),
      'Error creating profile',
    );
  }

  async createOrUpdate(params: {
    where: Prisma.ProfileWhereUniqueInput;
    data: Prisma.ProfileCreateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.profile.upsert({ where, create: data, update: data }),
      'Error creating or updating profile',
    );
  }

  async update(params: {
    where: Prisma.ProfileWhereUniqueInput;
    data: Prisma.ProfileUpdateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.profile.update({ where, data }),
      'Error updating profile',
    );
  }

  async delete(where: Prisma.ProfileWhereUniqueInput) {
    return this.handleRequest(
      () => this.prisma.profile.delete({ where }),
      'Error deleting profile',
    );
  }

  async count(where?: Prisma.ProfileWhereInput) {
    return this.handleRequest(
      () => this.prisma.profile.count({ where }),
      'Error counting profiles',
    );
  }
}
