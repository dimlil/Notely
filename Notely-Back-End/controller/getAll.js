import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllNotes = async (req, res) => {
    try {
        const notes = await prisma.notes.findMany()
        res.json(notes);
    } catch (error) {
        console.log(error);
    }
}