import { Router } from 'express';
import {
  authenticationLoginController,
  authenticationRegisterController,
} from '../controllers/authentication.controller';
const authenticationRoute = Router();

authenticationRoute.post('/register', authenticationRegisterController);
authenticationRoute.post('/login', authenticationLoginController);

export default authenticationRoute;