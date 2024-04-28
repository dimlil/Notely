import { prisma } from "../prisma/prismaClientInit.js";

export const createNote = async (req, res) => {
    try {
        const { title, content, id } = req.body;
        const note = await prisma.notes.create({
            data: {
                title,
                content,
                timestamps: new Date(),
                author: { connect: { id } },
            },
        });
        if(note){
            res.json('Note created successfully');
        }
    } catch (error) {
        console.log(error);
    }
}