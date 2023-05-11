import IVehicle from './IVehicle';

export default interface IMoto extends IVehicle {

  category: string;
  engineCapacity: number;
  
}