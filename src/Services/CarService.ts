import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

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
}

export default CarService;