import Router from 'express';
import { createTimeOffController } from '../controllers/timeoff.controller';
const timeOffRoute = Router();
import { uploadMulter } from '../middlewares/upload.multer';

timeOffRoute.post(
  '/request',
  uploadMulter('../uploads').fields([{ name: 'evidence', maxCount: 3 }]),
  createTimeOffController
);

export default timeOffRoute;
