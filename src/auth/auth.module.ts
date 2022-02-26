import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { UsersService } from "../users/users.service";
import { SessionSerializer } from "./session.serializer";

@Module({
  imports: [UsersModule, PassportModule.register({register: true})],
  providers: [UsersService, AuthService, LocalStrategy, SessionSerializer]
})
export class AuthModule {}
