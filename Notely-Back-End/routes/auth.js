import { Router } from "express";
import { registerUser } from "../controller/register.js";

const router = new Router();

router.post('/register',(req,res)=>{
    registerUser(req,res);
})

export { router as authRoute }