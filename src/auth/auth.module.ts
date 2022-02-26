import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { UsersService } from "../users/users.service";
import { SessionSerializer } from "./session.serializer";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET',//TODO: put in env
    signOptions: {expiresIn: '60s'},
  })],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
