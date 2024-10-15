import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UserService {

    private prismaClient = new PrismaClient();

    async createUser(createUserDto:CreateUserDto) {
        const user = await this.prismaClient.user.create({
            data: {
                ...createUserDto
            }
        });
        return user;
    }

}
