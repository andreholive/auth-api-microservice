import { EntityManager } from "typeorm";
import { User } from "../entities/User";

export class UserRepository {
    private manager: EntityManager

    constructor(manager: EntityManager){
        this.manager = manager;
    }

    createUser = async (user:User):Promise<User> => {
        return this.manager.save(user);
    }

    getUser = async (email:string, password:string) => {
        return await this.manager.findOne(User, {where:{
            email,
            password
        }})
    }

    getAllUsers = async () => {
        return await this.manager.find(User);
    }
}