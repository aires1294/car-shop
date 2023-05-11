import { Request, Response, NextFunction } from 'express'; 
import MotoService from '../Services/MotoService';
import IMoto from '../Interfaces/IMotorcycle';

class MotoController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotoService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotoService();
  }

  public async create() {
    // console.log(this.req.body);
    const moto: IMoto = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
      
    };

    const newMoto = await this.service.registerMoto(moto);
    return this.res.status(201).json(newMoto);
  }
}

export default MotoController;