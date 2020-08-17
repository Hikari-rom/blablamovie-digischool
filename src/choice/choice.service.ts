import { Injectable } from '@nestjs/common';
import { Choice } from './choice.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as Omdb from 'omdbapi';
import { ConfigService } from '@nestjs/config';
import { weekNumber } from 'weeknumber';
import { UserService } from '../user/user.service';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectRepository(Choice)
    private choiceRepository: Repository<Choice>,
    private configService: ConfigService,
    private userService: UserService,
  ) {}

  async insert(userId: number, searchGiven: string): Promise<Choice> {
    const omdbapi = new Omdb(this.configService.get<string>('OMDBAPI_KEY'));
    const user = await this.userService.findOne(userId);
    const choiceReceived = await omdbapi
      .search({
        search: searchGiven,
      })
      .then(async function(result) {
        const selected = result[0]['imdbid'];
        return new Choice(selected, user, weekNumber(new Date()), new Date().getFullYear());
      });
    return await this.choiceRepository.save(choiceReceived);
  }

  async delete(choiceId: number): Promise<DeleteResult> {
    return await this.choiceRepository.delete(choiceId);
  }

  getUserChoices(userId: number): Promise<Choice[]> {
    return this.choiceRepository.find();
  }

  async getBestMovie(): Promise<{ movieId: string; count: number }[]> {
    return await this.choiceRepository
      .createQueryBuilder('choices')
      .select('filmId')
      .addSelect('COUNT(*) as count')
      .groupBy('choices.filmId')
      .orderBy('count', 'DESC')
      .getRawMany();
  }

  async getCountMovie(filmId: string): Promise<number> {
    return await this.choiceRepository
      .createQueryBuilder('choices')
      .where('choices.filmId = :id', { id: filmId })
      .getCount();
  }
}
