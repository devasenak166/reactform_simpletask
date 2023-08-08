import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { register } from "./controller/register.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const URL = process.env.CONNECTION_MONGO;
const PORT = process.env.PORT;
// app.use('/',(req,res)=>{
//     res.send('Hello World');
// })
app.post("/", register);
mongoose
  .connect(URL, { useUnifiedTopology: true }, { useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log("connected success")))
  .catch((err) => console.log(err));
