import { prisma } from "../prisma/prismaClientInit.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await prisma.notes.findMany()
        res.json(notes);
    } catch (error) {
        console.log(error);
    }
}