import { NextFunction, Request, Response } from 'express';

export const verifyRole = (authorizeRole: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { payload } = res?.locals;
    if (!authorizeRole.includes(payload?.departments))
      throw new Error('Unauthorized user role');

    next();
  };
};
