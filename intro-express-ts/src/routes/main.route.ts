import { Router } from 'express';
import productsRoute from './products.route';
import authenticationRoute from './authentication.route';
import routesRoute from './routes.route';

const route = Router();

route.use('/api/products', productsRoute);
route.use('/api/authentication', authenticationRoute);
route.use('/api/routes-travel', routesRoute);

export default route;
