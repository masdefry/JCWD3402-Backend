import { Book } from '../generated/prisma';
import prisma from '../config/prisma.client';

export const createBookService = async ({
  title,
  author,
  publishYear,
  publisher,
}: Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>) => {
  await prisma.book.create({
    data: {
      title,
      author,
      publishYear,
      publisher,
    },
  });
};

export const updateBookService = async ({
  title,
  author,
  publishYear,
  publisher,
  id,
}: Omit<Book, 'createdAt' | 'updatedAt' | 'deletedAt'>) => {
    await prisma.book.update({
        data: {
            title, 
            author, 
            publisher, 
            publishYear
        }, 
        where: {
            id
        }
    })
};
