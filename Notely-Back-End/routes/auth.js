import { Router } from "express";
import { registerUser } from "../controller/register.js";
import { verifyUser } from "../controller/jwtUtils.js";
import { loginUser } from "../controller/login.js";

const router = new Router();

router.post('/register',(req,res)=>{
    registerUser(req,res);
})
router.post('/login',(req,res)=>{
    loginUser(req,res);
})
router.post('/verifyUser',verifyUser,(req,res)=>{
    res.json(req.isLoggedIn)
})

export { router as authRoute }