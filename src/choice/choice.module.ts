import {Module} from "@nestjs/common";
import {ChoiceController} from "./choice.controller";
import {ChoiceService} from "./choice.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Choice} from "./choice.entity";
import {UserService} from "../user/user.service";

@Module(
    {
        imports: [UserService, TypeOrmModule.forFeature([Choice])],
        controllers: [ChoiceController],
        providers: [ChoiceService],
        exports: [ChoiceService]
    }
)
export class ChoiceModule{}
