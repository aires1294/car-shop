import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.value,
      year: this.req.body.value,
      color: this.req.body.value,
      status: this.req.body.value,
      buyValue: this.req.body.value,
      doorsQty: this.req.body.value,
      seatsQty: this.req.body.value,
    };

    try {
      const newCar = await this.service.register(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
