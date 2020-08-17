import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { Choice } from './choice.entity';
import { CreateChoiceDto } from './create-choice.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('choices')
@ApiTags('Choices')
export class ChoiceController {
  constructor(private choiceService: ChoiceService) {}

  @Post()
  async addNewChoice(@Body() createChoiceDto: CreateChoiceDto): Promise<Choice> {
    return await this.choiceService
      .insert(createChoiceDto.userId, createChoiceDto.imdbId)
      .then(c => c)
      .catch(e => {
        if (e.message == 'Incorrect IMDb ID.') {
          throw new BadRequestException("This movie doesn't exist");
        }
        throw e;
        // http://www.omdbapi.com/?i=dzadazdazd&apikey=placeholder This request return an invalid response by the API ( Response: False with unvalid JSON format )
      });
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
