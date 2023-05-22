import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtStrategy } from './strategy/strategy';
import { SqlInjectionGuard } from './strategy/sqlInyeccion';

@Module({
  imports:[JwtModule.register({}),PassportModule],
  providers: [AuthService,JwtStrategy,SqlInjectionGuard],
  controllers: [AuthController]
})
export class AuthModule {}
