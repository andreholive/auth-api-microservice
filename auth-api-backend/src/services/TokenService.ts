import jwt from 'jsonwebtoken';
import fs from 'fs';
import { UserData } from '../entities/User';

export default class TokenService {

    private publicCert:string
    private privateCert:string

    constructor(
        privateCert = fs.readFileSync('../todo', 'utf-8'), 
        publicCert = fs.readFileSync('../todo', 'utf-8')
        )
        {
        this.privateCert = privateCert;
        this.publicCert = publicCert;
    }

    generateToken(payload: UserData): string {
        const token = jwt.sign(payload, this.privateCert, { algorithm: 'RS256' });
        return token;
    }

    verifyToken(token: string): UserData | null{
        try {
            const payload = jwt.verify(token, this.publicCert, { algorithms: ['RS256'] }) as UserData;
            return payload;
        } catch (error) {
            return null 
        }
    }
}
