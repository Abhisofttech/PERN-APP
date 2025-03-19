import express from 'express';
import dotenv from 'dotenv';
import pg from 'pg';

const app = express();
dotenv.config();
app.use(express.json())

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
}).catch((err)=>{
    console.log(`Error connecting the DB:${err}`)
}
)

app.post('/', async(req,res)=>{
const {name , age}=req.body;
if(!name || !age){
    return res.status(400).json({Error:"Name or Age is no define"});
}
try{
    const create_query=`INSERT INTO user_info (name , age) VALUES ($1 , $2) RETURNING *`
    const result=await client.query(create_query,[name,age]);
    console.log("result",result)
    res.send(result);
}catch(err){
    console.log("Error in creating User",err)
    return res.status(400).json({Message:"Error Creating User",Error:err});
}


})




app.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`);
})