import { Schema } from 'mongoose';
import IMoto from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotoODM extends AbstractODM<IMoto> {
  constructor() {
    const schema = new Schema<IMoto>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }
  //   public async getAll(): Promise<ICar[]> {
  //     return this.model.find({});
  //   }

  //   public async getCarById(id: string): Promise<ICar | null> {
  //     return this.model.findOne({ _id: id });
  //   }

  //   public async updateCarById(id: string, obj: object) {
  //     return this.model.findByIdAndUpdate({ _id: id }, obj, { new: true });
  //   }
}

export default MotoODM;
