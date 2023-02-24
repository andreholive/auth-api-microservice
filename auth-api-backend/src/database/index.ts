import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "db",
    port: 3306,
    username: "root",
    password: "senha123",
    synchronize: true,
    logging: false,
    database: "users_db",
    migrations: [
        "./src/database/migrations/*.ts"
    ],
});

AppDataSource.initialize().then(() => {
    console.log('data source inicializado!')
}).catch((err) => {
    console.log(err)
});