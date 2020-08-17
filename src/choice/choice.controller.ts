import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { Choice } from './choice.entity';
import { CreateChoiceDto } from './create-choice.dto';

@Controller('choices')
export class ChoiceController {
  constructor(private choiceService: ChoiceService) {}

  @Post()
  addNewChoice(@Body() createChoiceDto: CreateChoiceDto): Promise<Choice> {
    return this.choiceService.insert(createChoiceDto.userId, createChoiceDto.search);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteChoice(@Param('id') id: number): void {
    void this.choiceService.delete(id);
  }

  @Get()
  getUsersChoice(@Query('userId') userId: number): Promise<Choice[]> {
    return this.choiceService.getUserChoices(userId);
  }
}
