import { manager } from "../database";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository"

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository = new UserRepository(manager)){
        this.userRepository = userRepository;
    }

    createUser = async (name: string, email: string, password: string):Promise<User> => {
        const user = new User(name, email, password);
        return await this.userRepository.createUser(user);
    }

    getAllUsers = async () => {
        return await this.userRepository.getAllUsers();
    }
}