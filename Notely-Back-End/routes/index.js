import { Router } from "express";
import { createNote } from "../controller/create.js";
import { getAllNotes } from "../controller/getAll.js";

const router = new Router();

router.get('/',(req,res)=>{
    res.send("Hello World");
})
router.post('/create',(req,res)=>{
    createNote(req,res);
})
router.get('/getAllNotes',(req,res)=>{
    getAllNotes(req,res)
})

export { router as indexRoute }