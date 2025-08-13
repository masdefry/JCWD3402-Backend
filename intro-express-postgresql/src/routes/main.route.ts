import { Router } from 'express';
import countryRoute from './country.route';
const route = Router();

route.use('/api/country', countryRoute);

export default route;
