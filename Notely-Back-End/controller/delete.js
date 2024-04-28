import { prisma } from "../prisma/prismaClientInit.js";

export const deleteNote = async (req, res) => {
    try {
        const note = await prisma.notes.delete({ where: { id: req.params.id } })
        res.status(204).json(note);
    } catch (error) {
        console.log(error);
    }
}