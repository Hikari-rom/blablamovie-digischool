import {Body, Controller, Get, Post} from "@nestjs/common";
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
}
