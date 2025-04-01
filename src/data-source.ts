import { DataSource } from "typeorm";

import "dotenv/config"; //Carga variables de .env

// type DBType = "postgres"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'newdb',
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    synchronize: false, // cambiar a true solo en desarrollo
    logging: false

    // type: process.env.DB_TYPE as DBType,
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // entities: ["src/entity/*.ts"],
    // migrations: ["src/migration/*.ts"],
    // synchronize: false, // cambiar a true solo en desarrollo
    // logging: false
})