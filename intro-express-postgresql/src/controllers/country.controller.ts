// Controller: Handle request & response

import { Request, Response } from 'express';
import {
  createCountryService,
  readCountryService,
} from '../services/country.service';

export const createCountryController = async (req: Request, res: Response) => {
  const { country } = req.body;

  await createCountryService({ country });

  res.status(201).json({
    success: true,
    message: 'Country created successfully',
    data: { country },
  });
};

export const readCountryController = async (req: Request, res: Response) => {
  const {rows} = await readCountryService();

  res.status(200).json({
    success: true,
    message: 'Get country successfull',
    data: rows,
  });
};
