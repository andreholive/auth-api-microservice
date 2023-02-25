import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "dataserver",
    port: 3306,
    username: "root",
    password: "senha123",
    database: "users_db",
    entities: [User],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize().then(() => {
    console.log('data source inicializado!')
}).catch((err: any) => {
    console.log(err)
});