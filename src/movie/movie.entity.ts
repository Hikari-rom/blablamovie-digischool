import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("movies")
export class Movie {

    constructor(
        movieName: string
    )
    {
        this.name = movieName;
    }
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

}
