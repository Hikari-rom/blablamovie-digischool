import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { ChoiceModule } from '../choice/choice.module';
import { MovieService } from './movie.service';

@Module({
  imports: [ChoiceModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
