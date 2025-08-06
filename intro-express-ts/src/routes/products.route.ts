import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  updateProductController,
} from '../controllers/products.controller';

const productsRoute = Router();

productsRoute.post('/', createProductController);
productsRoute.put('/:idProduct', updateProductController);
productsRoute.delete('/:idProduct', deleteProductController);

export default productsRoute;
