import {Injectable} from "@nestjs/common";
import {Choice} from "./choice.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ChoiceService
{
    constructor(
        @InjectRepository(Choice)
        private choiceRepository: Repository<Choice>
    )
    {}
}
