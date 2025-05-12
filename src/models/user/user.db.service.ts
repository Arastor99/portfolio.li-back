import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class UserDbService {
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
    where: Prisma.UserWhereUniqueInput;
    select?: Prisma.UserSelect | null;
  }) {
    const { where, select } = params;

    return this.handleRequest(
      () => this.prisma.user.findUnique({ where, select }),
      'Error retrieving user',
    );
  }

  async findMany(params: {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    select?: Prisma.UserSelect | null;
    take?: number;
    skip?: number;
  }) {
    const { where, orderBy, select, take, skip } = params;

    return this.handleRequest(
      () =>
        this.prisma.user.findMany({
          where,
          orderBy,
          select,
          take,
          skip,
        }),
      'Error retrieving users',
    );
  }

  async create(data: Prisma.UserCreateInput) {
    return this.handleRequest(
      () => this.prisma.user.create({ data }),
      'Error creating user',
    );
  }

  async createOrUpdate(params: {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.UserCreateInput;
    update: Prisma.UserUpdateInput;
  }) {
    const { where, create, update } = params;

    return this.handleRequest(
      () => this.prisma.user.upsert({ where, create, update }),
      'Error creating or updating user',
    );
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = params;

    return this.handleRequest(
      () => this.prisma.user.update({ where, data }),
      'Error updating user',
    );
  }

  async delete(where: Prisma.UserWhereUniqueInput) {
    return this.handleRequest(
      () => this.prisma.user.delete({ where }),
      'Error deleting user',
    );
  }

  async count(where?: Prisma.UserWhereInput) {
    return this.handleRequest(
      () => this.prisma.user.count({ where }),
      'Error counting users',
    );
  }
}
