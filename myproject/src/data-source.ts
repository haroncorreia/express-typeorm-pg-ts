import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "vertrigo",
    database: "myprojectdb",    
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
})
