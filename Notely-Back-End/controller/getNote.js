import { prisma } from "../prisma/prismaClientInit.js";

export const getNote = async (req, res) => {
    try {
        const note = await prisma.notes.findMany({ where: { id: req.params.id } })
        res.json(note);
    } catch (error) {
        console.log(error);
    }
}