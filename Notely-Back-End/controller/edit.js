import { prisma } from "../prisma/prismaClientInit.js";

export const editNote = async (req, res) => {
    const { title, content, id } = req.body;
    try {
        const note = await prisma.notes.update({ 
            where: { id: req.params.id } , 
            data: {
                title,
                content,
                timestamps: new Date(),
                author: { connect: { id } },
            },
        })
        res.status(200).json(note);
    } catch (error) {
        console.log(error);
    }
}