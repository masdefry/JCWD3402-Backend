import { Request, Response } from 'express';

export const registerController = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
};
