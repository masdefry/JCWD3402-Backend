import { Request, Response } from 'express';
import { createTimeOffService } from '../services/timeoff.service';

export const createTimeOffController = async (req: Request, res: Response) => {
  const { startDate, endDate, reason } = req?.body;
  const { uid } = res?.locals?.payload;

  let files: Express.Multer.File[] = [];

  if (Array.isArray(req.files)) {
    files = req.files;
  } else if (req.files) {
    files = (req.files as Record<string, Express.Multer.File[]>).evidence || [];
  }

  await createTimeOffService({
    files,
    startDate,
    endDate,
    reason,
    uid,
  });

  res.status(201).json({
    success: true,
    message: 'Leave request created successfully',
    data: {
      startDate,
      endDate,
      reason,
    },
  });
};
