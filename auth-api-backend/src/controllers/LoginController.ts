import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export class LoginController {
    
    private service: AuthService

    constructor(service = new AuthService()){
        this.service = service;
    }

    authUser = async (request:Request, response:Response) => {

        const {email, password} = request.body;

        if(!email){
            return response.sendStatus(400)
        }
        if(!password){
            return response.sendStatus(400)
        }

        const user = await this.service.authenticate(email, password);

        if(!user){
            return response.sendStatus(401)
        }
        //TODO gerar o token para o usuário
    }
}