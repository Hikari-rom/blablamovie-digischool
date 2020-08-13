import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("users")
export class User {
    @PrimaryColumn()
    email: string;

    @Column()
    pseudo: string;

    @Column()
    birthDate: Date;

    @CreateDateColumn()
    creationDate: Date;
}
