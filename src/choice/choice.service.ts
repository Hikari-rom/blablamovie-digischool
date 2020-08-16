import {Injectable} from "@nestjs/common";
import {Choice} from "./choice.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import * as Omdb from "omdbapi";
import {ConfigService} from "@nestjs/config";
@Injectable()
export class ChoiceService
{
    constructor
    (
        @InjectRepository(Choice)
        private choiceRepository: Repository<Choice>,
        private configService: ConfigService
    ) {}

    async insert(userId: number, searchGiven: string): Promise<Choice>
    {
        const omdbapi = new Omdb(this.configService.get<string>('OMDBAPI_KEY'));
        const choiceReceived = await omdbapi.search({
            search: searchGiven
        }).then(function(result) {
            const selected = result[0]['imdbid'];
            // console.log(userId);
            return new Choice(selected,userId,1,1);
        });
        // console.log(choiceReceived);
        return await this.choiceRepository.save(choiceReceived);
        // const choiceReceived = new Choice(chosenMovie.imdbid,userId,1,1);
    }

    delete(choiceId: number): any
    {
        return this.choiceRepository.delete(choiceId);
    }

    getUserChoices(userId: number): any
    {
        // return this.choiceRepository.createQueryBuilder()
        //     .where("userId = :id", { id: user});
        return this.choiceRepository.find({user: userId});
    }
}
