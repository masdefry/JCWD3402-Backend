import express, { Express, NextFunction, Request, Response } from 'express';
import route from './routes/main.route';

const port: number = 8000;
const app: Express = express();
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
