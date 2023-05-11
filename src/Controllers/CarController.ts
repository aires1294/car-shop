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
    // console.log(this.req.body);
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
      
    };

    const newCar = await this.service.register(car);
    return this.res.status(201).json(newCar);
  }

  public async getAllCars(): Promise<object> {
    const result = await this.service.getAllCars();
    return this.res.status(200).json(result);
  }

  public async getCarById() {
    const { id } = this.req.params;
    try {
      const result = await this.service.getCarById(id);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarById() {
    const { id } = this.req.params;
    const car = this.req.body;
    try {
      const result = await this.service.updateCarById(id, car);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}
export default CarController;
