import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {ChoiceService} from "./choice.service";
import {Choice} from "./choice.entity";
import {CreateChoiceDto} from "./create-choice.dto";

@Controller('choices')
export class ChoiceController {

    constructor(private choiceService: ChoiceService){}

    @Post()
    addNewChoice(@Body() createChoiceDto: CreateChoiceDto): Promise<Choice>{
        return this.choiceService.insert(createChoiceDto.userId,createChoiceDto.search);
    }
    @Delete(':id')
    deleteChoice(@Param('id') id): string{
        return this.choiceService.delete(id);
    }
    @Get()
    getUsersChoice({number: userId}): string{
        return this.choiceService.getUserChoices(userId);
    }
}
