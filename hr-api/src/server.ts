import express, { Express, NextFunction, Request, Response } from 'express';
import route from './routes/main.route';
import cors from 'cors';

const port: number = 8000;
const app: Express = express();
app.use(cors()) // Semua client dapat mengakses API kita
app.use(express.json());
app.use(route);

// Error handler middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: err?.message,
    data: {},
  });
});

app.listen(port, () => {
  console.log(`[API] Running in port: ${port}`);
});
