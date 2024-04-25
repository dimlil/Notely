import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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