import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Entity('choices')
@Unique(['user', 'weekNumber', 'year', 'movie'])
export class Choice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Movie,
    movie => movie.choices,
  )
  movie: Movie;

  @ManyToOne(
    () => User,
    user => user.choices,
  )
  user: User;

  @Column()
  weekNumber: number;

  @Column()
  year: number;

  constructor(film: Movie, user: User, weekNumber: number, year: number) {
    this.movie = film;
    this.user = user;
    this.weekNumber = weekNumber;
    this.year = year;
  }
}
