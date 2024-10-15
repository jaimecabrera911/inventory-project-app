import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductService {
  private readonly prismaService = new PrismaClient();
  async create(createProductsDto: CreateProductDto[]) {
    await this.prismaService.product.createMany({ data: [...createProductsDto] });
    return;
  }

  async findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.prismaService.product.update({
      where: { id },
      data: { ...updateProductDto },
    })
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    this.prismaService.product.delete({ where: { id } })
    return `This action removes a #${id} product`;
  }
}
