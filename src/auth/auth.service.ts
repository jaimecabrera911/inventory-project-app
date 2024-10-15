import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  private prismaClient = new PrismaClient();

  constructor(
    private jwtService: JwtService
  ){}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    return null;
  }
}
