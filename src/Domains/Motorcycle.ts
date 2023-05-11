import IMoto from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMoto) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }
}

export default Motorcycle;