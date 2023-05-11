import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMoto from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';
import CustomError from '../Utils/error';

class MotoService {
  private motoODM: MotoODM;
  constructor() {
    this.motoODM = new MotoODM();
  }
  private createMotoDomain(moto: IMoto | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async registerMoto(moto: IMoto) {
    const newMoto = await this.motoODM.create(moto);
    return this.createMotoDomain(newMoto);
  }

  public async getAllMotos() {
    const allCars = await this.motoODM.getAll();
    const result = allCars.map((moto) => ({
      id: moto.id,
      model: moto.model,
      year: moto.year,
      color: moto.color,
      status: moto.status,
      buyValue: moto.buyValue,
      category: moto.category,
      engineCapacity: moto.engineCapacity,
    }));
    return result;
  }

  public async getMotoById(id: string) {
    if (!isValidObjectId(id)) throw new CustomError(422, 'Invalid mongo id');
    const car = await this.motoODM.getMotoById(id);
    // console.log('AGORAAAA', car);
    
    if (!car) throw new CustomError(404, 'Motorcycle not found');
    return this.createMotoDomain(car);
  }
}

export default MotoService;