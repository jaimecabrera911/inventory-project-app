import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { ProductModule } from './product/product.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [ProductModule, JwtModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UserService, JwtService],
})
export class AppModule {}
