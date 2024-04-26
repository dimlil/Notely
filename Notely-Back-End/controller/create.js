import { prisma } from "../prisma/prismaClientInit.js";

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await prisma.notes.create({
            data: {
                title,
                content,
                timestamps: new Date()
            },
        });
    } catch (error) {
        console.log(error);
    }
}