import multer from 'multer';
import { Request } from 'express';
import path from 'path';

export const uploadMulter = (pathDir: string) => {
  const storage = multer.diskStorage({
    destination: function (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, destination: string) => void
    ) {
      const destinationDir = path.join(__dirname, pathDir);
      cb(null, destinationDir);
    },
    filename: function (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, destination: string) => void
    ) {
      const splitOriginalName = file?.originalname?.split('.'); // test.01.xls -> [test, 01, xls]
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname +
          '-' +
          uniqueSuffix +
          `.${splitOriginalName[splitOriginalName.length - 1]}`
      );
    },
  });

  return multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 2 } }); // limit file size 2mb
};
