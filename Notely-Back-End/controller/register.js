import { prisma } from "../prisma/prismaClientInit.js";
import bcrypt from 'bcrypt';
import { generateToken } from "./jwtUtils.js";

export const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const user = await prisma.users.create({
            data: {
                name,
                email,
                password
            },
        })
        if(user){
            const token = await generateToken(email);
            res.status(200).json({
                token,
                userId: user.id
            });
        }
    } catch (error) {
        res.json(error);
    }
}