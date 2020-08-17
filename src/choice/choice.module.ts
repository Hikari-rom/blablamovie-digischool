import { Module } from '@nestjs/common';
import { ChoiceController } from './choice.controller';
import { ChoiceService } from './choice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from './choice.entity';
import { UserModule } from '../user/user.module';
import { MovieModule } from '../movie/movie.module';

@Module({
  imports: [TypeOrmModule.forFeature([Choice]), UserModule, MovieModule],
  controllers: [ChoiceController],
  providers: [ChoiceService],
})
export class ChoiceModule {}
