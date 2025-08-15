import { Request, Response } from 'express';
import { loginService, registerService } from '../services/auth.service';

export const registerController = async (req: Request, res: Response) => {
  const {
    fullName,
    phoneNumber,
    email,
    password,
    employmentStatus,
    departmentId,
    positionId,
    workShiftId,
  } = req.body;

  const { password: _, ...userWithoutPassword } = await registerService({
    fullName,
    phoneNumber,
    email,
    password,
    employmentStatus,
    departmentId,
    positionId,
    workShiftId,
  });

  res.status(201).json({
    success: true,
    message: 'Employee account created successfully',
    data: userWithoutPassword,
  });
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await loginService({ email, password });

  res.status(200).json({
    success: true,
    message: 'Login into account successfull',
    data: {
      token,
    },
  });
};
