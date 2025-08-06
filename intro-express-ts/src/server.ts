import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import route from './routes/main.route';

const app: Application = express();
const port = 8000;

// Middleware Body Parser: Express bisa menangkap req data yg dikirim melalui body
app.use(express.json());

app.use(route);

app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Get to endpoint /api successfull',
    data: {},
  });
});

app.get('/api/products', (req: Request, res: Response) => {
  const products = fs.readFileSync('src/database/products.json', 'utf-8');
  const objectProducts = JSON.parse(products);
  res.status(200).json({
    success: true,
    message: 'Get products successfull',
    data: objectProducts,
  });
});

app.listen(port, () => {
  console.log(`[⚡SERVER] Running in http://localhost:${port}/`);
});

// 1. Routes     : Handle routing
// 2. Controller : Handle request dan response
// 3. Service    : Handle logika backend
// 4. Repository/Data Acces Layer: Handle komunikasi dengan database
