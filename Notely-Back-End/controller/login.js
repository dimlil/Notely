import bcrypt from 'bcrypt';
import { generateToken } from './jwtUtils.js';
import { prisma } from '../prisma/prismaClientInit.js';

export const loginUser = async (req, res) => {
    let { email, password } = req.body;
    const user = await prisma.users.findFirst({ where: { email } });
    if (!user) { return res.status(404).send('User Not Found') }

    try {
        const status = await bcrypt.compare(password, user.password);
        if (status) {
            const token = await generateToken(email);
            return res.json({ token })
        }
    } catch (error) {
        return res.json(error);
    }
}
