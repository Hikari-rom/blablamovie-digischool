import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import { ConfigService } from '@nestjs/config';
import { Movie } from './movie.entity';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService, private configService: ConfigService) {}

  @Get()
  getBestFilmWeek(): Promise<Movie[]> {
    return this.movieService.getBestMovie();
  }

  @Get(':id')
  getMovie(id: string): any {
    return this.movieService.getMovie(id);
  }
}
