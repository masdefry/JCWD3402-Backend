import { Request, Response } from 'express';
import fs from 'fs';
import { readFile } from '../utils/read.file';

export const createProductController = (req: Request, res: Response) => {
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
};

export const updateProductController = (req: Request, res: Response) => {
  const { idProduct } = req.params;
  const { name, price, stock, unit } = req.body;
  const products = readFile('src/database/products.json');

  const findIndexProduct = products?.findIndex(
    (product: any) => product?.id == idProduct
  );

  products[findIndexProduct] = { id: idProduct, name, price, stock, unit };

  fs.writeFileSync('src/database/products.json', JSON.stringify(products));

  res.status(200).json({
    success: true,
    message: `Update product with id = ${idProduct} successfull`,
    data: {
      name,
      price,
      stock,
      unit,
    },
  });
};

export const deleteProductController = (req: Request, res: Response) => {
  const { idProduct } = req?.params;

  const products = readFile('src/database/products.json');

  const findIndexProduct = products?.findIndex(
    (product: any) => product?.id == idProduct
  );

  products?.splice(findIndexProduct, 1);

  fs.writeFileSync('src/database/products.json', JSON.stringify(products));

  res.status(200).json({
    success: true,
    message: `Delete product with id = ${idProduct} successfull`, 
    data: {}
  })
};
