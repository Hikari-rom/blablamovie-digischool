import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { ConfigService } from '@nestjs/config';
import { Movie } from './movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService, private configService: ConfigService) {}

  @Get()
  getBestFilmWeek(): Promise<Movie[]> {
    return this.movieService.getBestMovie();
  }

  @Get(':id')
  getMovie(@Param('id') id: string): Promise<Movie> {
    return this.movieService.getMovie(id);
  }
}
