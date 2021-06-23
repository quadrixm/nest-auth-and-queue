import { Module } from '@nestjs/common';
import { AuthController } from 'app/auth/auth.controller';
import { AuthService } from 'app/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'app/auth/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
