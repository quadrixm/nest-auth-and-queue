import { Module } from '@nestjs/common';
import { AuthController } from 'app/auth/auth.controller';
import { AuthService } from 'app/auth/auth.service';
import { UsersModule } from 'app/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'app/auth/local.strategy';
import { jwtConstants } from 'app/auth/constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'app/auth/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60d' },
    }),
    UsersModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
