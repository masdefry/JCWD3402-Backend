import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) throw new Error('Token must be provided');

  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY_AUTHENTICATION!);

  res.locals.payload = payload;

  next();
};
