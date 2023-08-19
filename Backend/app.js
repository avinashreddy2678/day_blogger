// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Cors from 'cors';
import { userrouter } from './Router/UserRouter.js';
import { postrouter } from './Router/PostRouter.js';
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGODB);
<<<<<<< HEAD
=======

>>>>>>> a34dad6790b20306130c0bd988b1ae6db461d602
app.use(Cors())
app.use(express.json());

app.use("/posts",postrouter);
app.use("/auth",userrouter);


app.listen(process.env.PORT||'5001',()=>{
        console.log("server running");
})
