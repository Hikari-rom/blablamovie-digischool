import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  insertUser(createInformations: CreateUserDto): Promise<User> {
    const userReceived = new User(
      createInformations.email,
      createInformations.pseudo,
      new Date(createInformations.birthDate),
    );
    return this.usersRepository.save(userReceived);
  }

  insertChoice(): Promise<User[]> {
    return this.usersRepository.find({ id: 1 });
  }

  // getUsersWithChoice(): Promise<User[]> {
  //   return this.usersRepository.find({ relations: ['choices'] });
  //   // return this.usersRepository.find({ join: { alias: 'choices', innerJoinAndSelect: { choices: 'choices.user' } } });
  //   // return this.usersRepository
  //   //   .createQueryBuilder('choices')
  //   //   .innerJoin('choices.user', 'c')
  //   //   .getMany();
  // }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }
}
