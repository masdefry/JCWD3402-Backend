import Router from 'express';
import {
  createTimeOffController,
  getTimeOffController,
} from '../controllers/timeoff.controller';
const timeOffRoute = Router();
import { uploadMulter } from '../middlewares/upload.multer';
import { verifyToken } from '../middlewares/verify.token';

timeOffRoute.post(
  '/request',
  verifyToken,
  uploadMulter('../uploads', false).fields([{ name: 'evidence', maxCount: 3 }]),
  createTimeOffController
);

timeOffRoute.get('/request', verifyToken, getTimeOffController);

export default timeOffRoute;
