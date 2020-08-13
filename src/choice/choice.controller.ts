import {Controller, Get, Post} from "@nestjs/common";

@Controller('choices')
export class ChoiceController {
    @Get()
    getUsersWithChoice(): string {
        return 'Save Choix Utilisateur';
    }
}
