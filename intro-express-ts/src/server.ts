import express, { Application, Request, Response } from 'express';
import fs from 'fs';

const app: Application = express();
const port = 8000;

// Middleware Body Parser: Express bisa menangkap req data yg dikirim melalui body
app.use(express.json());

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

app.post('/api/products', (req: Request, res: Response) => {
  const { name, price, stock, unit } = req.body;

  // Step-01 Read file
  const products = fs.readFileSync('src/database/products.json', 'utf-8');
  const objectProducts = JSON.parse(products);

  objectProducts.push({
    id: objectProducts?.length + 1,
    name,
    price,
    stock,
    unit,
  });

  fs.writeFileSync(
    'src/database/products.json',
    JSON.stringify(objectProducts)
  );

  res.status(201).json({
    success: true,
    message: 'Create product successfull',
    data: {
      name,
      price,
      stock,
      unit,
    },
  });
});

app.put('/api/products/:idProduct', (req: Request, res: Response) => {
  req.body;
  const { idProduct } = req.params;
});

app.listen(port, () => {
  console.log(`[⚡SERVER] Running in http://localhost:${port}/`);
});
