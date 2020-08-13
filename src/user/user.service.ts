import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    )
    {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
    insertUser(): any {
        let u1 = new User("aa@gmail.com","pseudal",new Date("10/12/2012",));
        console.log(u1);
        return this.usersRepository.insert(u1);
    }
}
