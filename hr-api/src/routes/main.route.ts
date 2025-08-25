import { Router } from 'express';
import authRoute from './auth.route';
import timeOffRoute from './timeoff.route';
const route = Router();

route.use('/api/auth', authRoute);
route.use('/api/time-off', timeOffRoute);

export default route;
