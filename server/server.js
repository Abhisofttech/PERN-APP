import express from 'express';
import dotenv from 'dotenv';
import pg from 'pg';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
const {Client} = pg;

const client = new Client({
    user: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    host: process.env.POSTGRESQL_HOST ,
    port: process.env.POSTGRESQL_PORT,
    dataBase: process.env.POSTGRESQL_DATABASE,
})

client.connect().then(()=>{
    console.log("DB Connected Successfully");
})





app.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`);
})