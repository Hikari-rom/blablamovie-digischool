import {Body, Controller, Get, Post} from "@nestjs/common";
import {CreateUserDto} from "./create-user.dto";
import {UserService} from "./user.service";

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
}

