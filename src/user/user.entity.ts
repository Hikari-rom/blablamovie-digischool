import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Choice } from '../choice/choice.entity';
import { Movie } from '../movie/movie.entity';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  pseudo: string;

  @Column()
  birthDate: Date;

  @CreateDateColumn()
  creationDate: Date;

  @OneToMany(
    () => Choice,
    choice => choice.user,
  )
  choices: Choice[];

  constructor(mail: string, pseudo: string, birth: Date) {
    this.email = mail;
    this.pseudo = pseudo;
    this.birthDate = birth;
  }
}
