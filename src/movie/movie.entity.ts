import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Choice } from '../choice/choice.entity';

@Entity('movies')
export class Movie {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  poster: string;

  count: number;

  @OneToMany(
    () => Choice,
    choice => choice.movie,
  )
  choices: Choice[];
}
