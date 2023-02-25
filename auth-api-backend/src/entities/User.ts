import { Column, Entity, PrimaryColumn } from "typeorm";
import { randomUUID } from 'crypto';

export interface UserData {
    user_id:string
    name:string
    email:string
}

@Entity('users')
export class User {
    @PrimaryColumn()
    user_id: string

    @Column({nullable:false})
    name: string

    @Column({nullable:false, unique: true})
    email: string

    @Column({nullable:false})
    password: string

    constructor(name: string, email:string, password:string){
        this.user_id = randomUUID();
        this.name = name;
        this.email = email;
        this.password = password
    }
}