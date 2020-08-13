import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./user/user.module";

@Module({
  imports: [TypeOrmModule.forRoot(),UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
