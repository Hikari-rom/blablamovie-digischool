import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity()
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
