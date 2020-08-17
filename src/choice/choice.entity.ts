import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('choices')
@Unique(['user', 'weekNumber', 'year', 'filmId'])
export class Choice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filmId: string;

  @ManyToOne(
    () => User,
    user => user.choices,
  )
  user: User;

  @Column()
  weekNumber: number;

  @Column()
  year: number;

  constructor(film: string, user: User, weekNumber: number, year: number) {
    this.filmId = film;
    this.user = user;
    this.weekNumber = weekNumber;
    this.year = year;
  }
}
