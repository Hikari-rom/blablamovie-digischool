import {Controller, Get, Post} from "@nestjs/common";

@Controller('choices')
export class ChoiceController {
    @Post('save')
    saveUserChoice(): string {
        return 'Save Choix Utilisateur';
    }

    @Post('delete')
    deleteOneUserChoice(): string {
        return 'Delete 1 choix utilisateur';
    }

    @Get('list')
    getListChoiceUser(): string {
        return 'Les choix de l\'utilisateur';
    }

}
