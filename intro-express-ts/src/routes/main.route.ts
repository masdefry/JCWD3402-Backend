import { Router } from 'express';
import productsRoute from './products.route';

const route = Router();

route.use('/api/products', productsRoute);

export default route;