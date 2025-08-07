import { Router } from 'express';
import { getRoutesTravelController } from '../controllers/routes.controller';
const routesRoute = Router();

routesRoute.get('/', getRoutesTravelController);

export default routesRoute;
