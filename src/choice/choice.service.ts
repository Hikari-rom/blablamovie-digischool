import {Injectable} from "@nestjs/common";
import {Choice} from "./choice.entity";
import {InsertResult, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import * as omdb from "omdbapi";
import {ConfigService} from "@nestjs/config";
@Injectable()
export class ChoiceService
{
    constructor(
        @InjectRepository(Choice)
        private choiceRepository: Repository<Choice>,
        private configService: ConfigService
    )
    {}
    insertChoice(userId: number,searchGiven: string): any{
        const omdbapi = new omdb(this.configService.get<string>('OMDBAPI_KEY'));
        const choiceReceived =  omdbapi.search({
            search: searchGiven
        }).then(function(result) {
            const selected = result[0]['imdbid'];
            // return {title: selected["title"], imdbid: selected['imdbid'], poster: selected["poster"] };
            console.log(userId);
            return new Choice(selected,userId,1,1);
        }).catch(function(error){
            return error;
        });
        return choiceReceived;
        // const resultInsert = this.choiceRepository.insert(choiceReceived);
        // const choiceReceived = new Choice(chosenMovie.imdbid,userId,1,1);
        // return resultInsert;
    }
}
