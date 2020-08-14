import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {UserService} from "./user.service";
import {ChoiceService} from "../choice/choice.service";
import {ChoiceModule} from "../choice/choice.module";

@Module(
    {
        imports: [TypeOrmModule.forFeature([User]), ChoiceModule],
        controllers: [UserController],
        providers: [UserService,ChoiceService]
    }
)
export class UserModule{}
