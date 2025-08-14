import { Request, Response } from 'express';
import {
  createBookService,
  updateBookService,
} from '../services/books.service';

export const createBookController = async (req: Request, res: Response) => {
  const { title, author, publishYear, publisher } = req.body;

  await createBookService({ title, author, publishYear, publisher });

  res.status(201).json({
    success: true,
    message: 'Create book successfull',
    data: {
      title,
      author,
      publishYear,
      publisher,
    },
  });
};

export const updateBookController = async (req: Request, res: Response) => {
  const { title, author, publishYear, publisher } = req.body;
  const { id } = req.params;

  await updateBookService({ title, author, publishYear, publisher, id });

  res.status(200).json({
    success: true,
    message: `Update book with id = ${id} successfull`,
    data: { title, author, publishYear, publisher },
  });
};
