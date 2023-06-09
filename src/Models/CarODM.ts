import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
  public async getAll(): Promise<ICar[]> {
    return this.model.find({});
  }

  public async getCarById(id: string): Promise<ICar | null> {
    return this.model.findOne({ _id: id });
  }

  public async updateCarById(id: string, obj: object) {
    return this.model.findByIdAndUpdate({ _id: id }, obj, { new: true });
  }
}

export default CarODM;
