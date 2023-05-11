import Motorcycle from '../Domains/Motorcycle';
import IMoto from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';

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
}

export default MotoService;