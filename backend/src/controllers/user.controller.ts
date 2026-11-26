import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { generateId } from '../utils/id';

export async function getUser(req: Request, res: Response) {
    const username = req.params.username as string;

    const foundUser = await prisma.user.findUnique({
        where: { username },
        omit: { id: true, password: true, email: true, updatedAt: true },
    });

    if (!foundUser) {
        return res.status(404).json({
            error: `404 Not Found: Could not find a user with the username of '${username}'`,
        });
    }

    res.json(foundUser);
}
