import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { ChoiceModule } from '../choice/choice.module';

@Module({
  imports: [ChoiceModule],
  controllers: [MovieController],
  providers: [],
})
export class MovieModule {}
