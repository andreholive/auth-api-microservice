import 'reflect-metadata';
import express from 'express';
import { router } from './routes';

const server = express();

server.use(express.json())
server.use(router)

server.listen(process.env.PORT, () => console.log('Auth Api Online na porta '+process.env.PORT))
