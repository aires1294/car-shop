import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import CustomError from '../Utils/error';

class CarService {
  private carODM: CarODM;
  constructor() {
    this.carODM = new CarODM();        
  }
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async register(car: ICar) {
    const newcar = await this.carODM.create(car);
    return this.createCarDomain(newcar);
  }

  public async getAllCars() {
    const allCars = await this.carODM.getAll();
    const result = allCars.map((car) => ({
      id: car.id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    }));
    return result;
  }

  public async getCarById(id: string) {
    if (!isValidObjectId(id)) throw new CustomError(422, 'Invalid mongo id');
    const car = await this.carODM.getCarById(id);
    console.log('estgou aqui', car);
    
    if (!car) throw new CustomError(404, 'Car not found');
    return this.createCarDomain(car);
  }
}

export default CarService;

// { "message": "Invalid mongo id" }