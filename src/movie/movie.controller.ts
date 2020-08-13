import {Controller, Get} from "@nestjs/common";

@Controller('movie')
export class MovieController {
    @Get()
    getBestFilmWeek(): string{
        return "truc";
    }
}
