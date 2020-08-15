import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {UserService} from "./user.service";
import {ChoiceService} from "../choice/choice.service";
import {ChoiceModule} from "../choice/choice.module";
import {ConfigModule} from "@nestjs/config";

@Module(
    {
        imports: [TypeOrmModule.forFeature([User])],
        controllers: [UserController],
        providers: [UserService]
    }
)
export class UserModule{}
