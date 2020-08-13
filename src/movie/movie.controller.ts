import {Controller, Get, Post} from "@nestjs/common";

@Controller('films')
export class UserController {
    @Post('create')
    createUser(): string {
        return 'Création utilisateur';
    }
    @Get('listChoice')
    getUsersWithChoice(): string {
        return 'Liste utilisateurs';
    }
}
