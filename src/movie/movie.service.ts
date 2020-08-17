import { Injectable } from '@nestjs/common';
import { ChoiceService } from '../choice/choice.service';
import * as Omdb from 'omdbapi';
import { ConfigService } from '@nestjs/config';
import { Movie } from './movie.entity';

const transformMovie = (imdbId, countNumber): Promise<Movie> => {
  return this.omdbapi
    .get({
      id: imdbId,
    })
    .then(function(result) {
      return { id: imdbId, title: result.title, poster: result.poster, count: countNumber };
    });
};

@Injectable()
export class MovieService {
  private omdbapi: Omdb;
  constructor(private choiceService: ChoiceService, private configService: ConfigService) {
    this.omdbapi = new Omdb(this.configService.get<string>('OMDBAPI_KEY'));
  }

  async getBestMovie(): Promise<Movie[]> {
    const ranking = await this.choiceService.getBestMovie();
    return Promise.all(
      ranking.map(
        async ({ movieId, count }): Promise<Movie> => {
          return await transformMovie(movieId, count);
        },
      ),
    );
  }

  async getMovie(id = 'tt0499549'): Promise<Movie> {
    return transformMovie(id, await this.choiceService.getCountMovie(id));
  }
}
