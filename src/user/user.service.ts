import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./create-user.dto";

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
    insertUser(createInformations: CreateUserDto): any {
        let userReceived = new User(createInformations.email,createInformations.pseudo,new Date(createInformations.birthDate));
        return this.usersRepository.insert(userReceived);
    }
}
