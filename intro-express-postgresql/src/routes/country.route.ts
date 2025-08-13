import { Router } from 'express';
import {
  createCountryController,
  readCountryController,
} from '../controllers/country.controller';
const countryRoute = Router();

countryRoute.post('/', createCountryController);
countryRoute.get('/', readCountryController);

export default countryRoute;
