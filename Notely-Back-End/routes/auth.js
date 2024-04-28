import { Router } from "express";
import { registerUser } from "../controller/register.js";
import { verifyUser } from "../controller/jwtUtils.js";

const router = new Router();

router.post('/register',(req,res)=>{
    registerUser(req,res);
})
router.post('/verifyUser',verifyUser,(req,res)=>{
    res.json(req.isLoggedIn)
})

export { router as authRoute }