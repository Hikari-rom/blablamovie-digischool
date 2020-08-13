import {Body, Controller, Get, Post} from "@nestjs/common";
import {CreateUserDto} from "./create-user.dto";
import {request} from "express";

@Controller('users')
export class UserController {
    @Post('create')
    createUser(@Body() createUser: CreateUserDto): {email: string, birthDate: Date} {
        console.log(createUser);
        return {email : createUser.email, birthDate : createUser.birthDate};
    }
    @Get('listChoice')
    getUsersWithChoice(): {list: string } {
        return {list: "aaazerertza"};
    }
}

