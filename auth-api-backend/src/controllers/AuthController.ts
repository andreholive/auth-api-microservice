import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export class AuthController {
    
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

        const authorization = await this.service.authenticate(email, password);

        if(!authorization.success){
            return response.sendStatus(401)
        }
        
        return response.status(200).json(authorization);
    }
}