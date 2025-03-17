import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app=express();
const PORT1=process.env.PORT;
// console.log(process.env)
const server=app.listen(PORT1,()=>{
    console.log(`server started.... \n And listening to Port ${PORT1}`);
})
