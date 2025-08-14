import { Router } from 'express';
import {
  createBookController,
  updateBookController,
} from '../controllers/books.controller';
const bookRoute = Router();

bookRoute.post('/', createBookController);
bookRoute.put('/:id', updateBookController);

export default bookRoute;
