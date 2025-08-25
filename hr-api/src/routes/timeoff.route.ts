import Router from 'express';
import { createTimeOffController } from '../controllers/timeoff.controller';
const timeOffRoute = Router();
import { uploadMulter } from '../middlewares/upload.multer';
import { verifyToken } from '../middlewares/verify.token';

timeOffRoute.post(
  '/request',
  verifyToken,
  uploadMulter('../uploads').fields([{ name: 'evidence', maxCount: 3 }]),
  createTimeOffController
);

export default timeOffRoute;
