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
}

export default CarService;