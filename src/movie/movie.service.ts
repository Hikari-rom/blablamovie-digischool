import { Injectable, NotFoundException } from '@nestjs/common';
import * as Omdb from 'omdbapi';
import { ConfigService } from '@nestjs/config';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

@Injectable()
export class MovieService {
  private omdbapi: Omdb;
  private transformMovie;
  constructor(
    private configService: ConfigService,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {
    this.omdbapi = new Omdb(this.configService.get<string>('OMDBAPI_KEY'));
    this.transformMovie = (imdbId, countNumber): Promise<Movie> => {
      return this.omdbapi
        .get({
          id: imdbId,
        })
        .then(function(result) {
          return { id: imdbId, title: result.title, poster: result.poster, count: countNumber };
        });
    };
  }

  async getBestMovie(): Promise<Movie[]> {
    const ranking = await this.getBestChosenMovies();
    return Promise.all(
      ranking.map(
        async ({ movieId, count }): Promise<Movie> => {
          return await this.transformMovie(movieId, count);
        },
      ),
    );
  }

  async getMovie(idMovie: string): Promise<Movie> {
    return {
      count: await this.getCountMovie(idMovie),
      ...(await this.movieRepository
        .findOneOrFail(idMovie, {
          relations: ['choices', 'choices.user'],
        })
        .catch(e => {
          throw new NotFoundException();
        })),
    };
  }

  async getBestChosenMovies(): Promise<{ movieId: string; count: number }[]> {
    return await this.movieRepository
      .createQueryBuilder('m')
      .select('c.movieId')
      .addSelect('COUNT(*) as count')
      .leftJoin('m.choices', 'c')
      .groupBy('c.movieId')
      .orderBy('count', 'DESC')
      .getRawMany();
  }

  async getCountMovie(movieId: string): Promise<number> {
    return await this.movieRepository
      .createQueryBuilder('m')
      .leftJoin('m.choices', 'c')
      .where('c.movie = :id', { id: movieId })
      .getCount();
  }

  findOne(conditions?: FindConditions<Movie>, options?: FindOneOptions<Movie>): Promise<Movie | undefined> {
    return this.movieRepository.findOne(conditions, options);
  }

  async saveFromOMDB(imdbId: string): Promise<Movie> {
    const movie = await this.getFromOMDB(imdbId);
    if (imdbId == 'tt0232500') {
      movie.title = 'Rapides et Dangereux';
    }
    return this.movieRepository.save(movie);
  }

  async getFromOMDB(imdbId: string): Promise<Movie> {
    return await this.omdbapi
      .get({
        id: imdbId,
      })
      .then(function(result) {
        return { id: imdbId, title: result.title, poster: result.poster };
      });
  }
}
