import { Router } from 'express';
import bookRoute from './books.route';
const route = Router();

route.use('/api/books', bookRoute);

export default route;
