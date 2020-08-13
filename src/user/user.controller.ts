import {Body, Controller, Get, Post} from "@nestjs/common";
import {CreateUserDto} from "./create-user.dto";
import {User} from "./user.entity";
import {UserService} from "./user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    createUser(@Body() createUser: CreateUserDto): {email: string, birthDate: Date} {
        // return {email : createUser.email, birthDate : createUser.birthDate};
        return this.userService.insertUser(createUser);
    }
    @Get('listChoice')
    getUsersWithChoice(): string {
        return "truc";
    }
    @Get('findAll')
    getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }
}

