import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";

@Entity("choices")
export class Choice
{

    constructor(
        film: string,
        user: number,
        weekNumber: number,
        year: number
    )
    {
        this.filmId = film;
        this.user = user;
        this.weekNumber = weekNumber;
        this.year = year;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filmId: string;

    @ManyToOne(() => User)
    user: number;

    @Column()
    weekNumber: number;

    @Column()
    year: number;
}
