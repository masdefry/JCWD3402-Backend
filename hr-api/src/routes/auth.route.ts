import { Router } from 'express';
import {
  loginController,
  registerController,
} from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/verify.token';
import { verifyRole } from '../middlewares/verify.role';
const authRoute = Router();

authRoute.post('/register', verifyToken, verifyRole(['HR']), registerController);
authRoute.post('/login', loginController);

export default authRoute;
