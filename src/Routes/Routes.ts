import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotoController from '../Controllers/MotoController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAllCars());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCarById());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCarById());
routes.post('/motorcycles', (req, res, next) => new MotoController(req, res, next).create());

export default routes;