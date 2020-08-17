import { Injectable } from '@nestjs/common';
import { Choice } from './choice.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { weekNumber } from 'weeknumber';
import { UserService } from '../user/user.service';
import { MovieService } from '../movie/movie.service';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectRepository(Choice)
    private choiceRepository: Repository<Choice>,
    private configService: ConfigService,
    private userService: UserService,
    private movieService: MovieService,
  ) {}

  async insert(userId: number, imdbId: string): Promise<Choice> {
    const user = await this.userService.findOne(userId);
    const movie = (await this.movieService.findOne({ id: imdbId })) ?? (await this.movieService.saveFromOMDB(imdbId));

    const choiceReceived = new Choice(movie, user, weekNumber(new Date()), new Date().getFullYear());
    return await this.choiceRepository.save(choiceReceived);
  }

  async delete(choiceId: number): Promise<DeleteResult> {
    return await this.choiceRepository.delete(choiceId);
  }

  getUserChoices(userId: number): Promise<Choice[]> {
    return this.choiceRepository.find();
  }
}
