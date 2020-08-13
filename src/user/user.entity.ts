import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("users")
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
    @PrimaryColumn()
    email: string;

    @Column()
    pseudo: string;

    @Column()
    birthDate: Date;

    @CreateDateColumn()
    creationDate: Date;
}
