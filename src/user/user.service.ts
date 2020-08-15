import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./create-user.dto";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    )
    {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
    insertUser(createInformations: CreateUserDto): any {
        const userReceived = new User(createInformations.email,createInformations.pseudo,new Date(createInformations.birthDate));
        return this.usersRepository.insert(userReceived);
    }
    insertChoice(): any {
        const omdb = new (require('omdbapi'))('6478392d');
        const userId = 1;
        const choice = omdb.search({
            search: 'sonic'
        }).then(function(result) {
            const selected = result[0];
            return {title: selected["title"], imdbid: selected['imdbid'], poster: selected["poster"] };
        }).catch(function(error){
            return error;
        });
        // return this.choiceService.insertChoice(userId, choice);
        return choice;
    }
}
