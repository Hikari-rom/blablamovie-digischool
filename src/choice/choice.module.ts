import { Module } from '@nestjs/common';
import { ChoiceController } from './choice.controller';
import { ChoiceService } from './choice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from './choice.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Choice]), UserModule],
  controllers: [ChoiceController],
  providers: [ChoiceService],
  exports: [ChoiceService],
})
export class ChoiceModule {}
