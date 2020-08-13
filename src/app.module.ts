import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./user/user.module";
import {ChoiceModule} from "./choice/choice.module";

@Module({
  imports: [TypeOrmModule.forRoot(),UserModule,ChoiceModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
