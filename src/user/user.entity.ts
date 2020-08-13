import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Choice} from "../choice/choice.entity";

@Entity("users")
@Unique(["email"])
export class User {
    constructor(
        mail: string,
        pseudo: string,
        birth: Date
    )
    {
        this.email = mail;
        this.pseudo = pseudo;
        this.birthDate = birth;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    pseudo: string;

    @Column()
    birthDate: Date;

    @CreateDateColumn()
    creationDate: Date;
}
