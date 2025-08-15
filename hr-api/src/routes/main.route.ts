import { Router } from 'express';
import authRoute from './auth.route';
const route = Router();

route.use('/api/auth', authRoute);

export default route;
