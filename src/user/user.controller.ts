import {Body, Controller, Delete, Get, Post} from "@nestjs/common";
import {CreateUserDto} from "./create-user.dto";
import {User} from "./user.entity";
import {UserService} from "./user.service";
import {Choice} from "../choice/choice.entity";

@Controller('users')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    createUser(@Body() createUser: CreateUserDto): {email: string, birthDate: Date} {
        return this.userService.insertUser(createUser);
    }
    @Get('listChoice')
    getUsersWithChoice(): string {
        return "truc";
    }
    @Get('findAll')
    getAllUsers(): any {
        return this.userService.insertChoice();
    }
    @Post(':userId/choices')
    addNewChoice(): string{
        return "Choix enregistré";
    }
    @Delete(':userId/choices/:choice')
    deleteChoice(): string{
        return "Choix détruit";
    }
    @Get(':userId/choices')
    getAllChoicesOfUser(): string{
        return "Choix utilisateur";
    }
}

