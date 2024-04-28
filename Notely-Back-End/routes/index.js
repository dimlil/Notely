import { Router } from "express";
import { createNote } from "../controller/create.js";
import { getAllNotes } from "../controller/getAllNotes.js";
import { getNote } from "../controller/getNote.js";
import { deleteNote } from "../controller/delete.js";

const router = new Router();

router.get('/',(req,res)=>{
    res.send("Hello World");
})
router.post('/create',(req,res)=>{
    createNote(req,res);
})
router.get('/getAllNotes',(req,res)=>{
    getAllNotes(req,res);
})
router.get('/getNote/:id',(req,res)=>{
    getNote(req,res)
})
router.delete('/delete/:id',(req,res)=>{
    deleteNote(req,res)
})

export { router as indexRoute }