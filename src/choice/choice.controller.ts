import {Body, Controller, Delete, Get, Post} from "@nestjs/common";
import {ChoiceService} from "./choice.service";
import {Choice} from "./choice.entity";
import {CreateChoiceDto} from "./create-choice.dto";

@Controller('choices')
export class ChoiceController {

    constructor(private choiceService: ChoiceService){}

    @Post()
    addNewChoice(@Body() createChoiceDto: CreateChoiceDto): Promise<Choice>{
        return this.choiceService.insertChoice(createChoiceDto.userId,createChoiceDto.search);
    }
    @Delete()
    deleteChoice({number: choiceId}): string{
        return this.choiceService.deleteChoice(choiceId);
    }
    @Get()
    getUsersChoice({number: userId}): string{
        return this.choiceService.getUserChoice(userId);
    }
}
