import { manager } from "../database";
import { UserRepository } from "../repositories/UserRepository";
import TokenService from "./TokenService";


export default class AuthService {

    private repository:UserRepository
    private tokenService: TokenService

    constructor(
        repository = new UserRepository(manager),
        tokenService = new TokenService('../teste', '../teste')
        ){
        this.repository = repository;
        this.tokenService = tokenService
    }

    authenticate = async (email:string, password:string) => {

        const user = await this.repository.getUser(email, password);

        if(!user){
            return {
                success: false,
                token: '',
                user:  ''
              }
        }
        

        return {
            success: true,
            token: this.tokenService.generateToken({email:user.email, name:user.name, user_id:user.user_id}),
            user: user.user_id
        } 
        
    }
}