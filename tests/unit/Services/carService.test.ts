import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

// const RESULT_ERROR = 'Invalid Key';

describe('Deveria validar e criar novos carros', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Criando um veículo do tipo carro com SUCESSO', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car(  
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      },
          
    );
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.register(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
  // it('Criando um veículo do tipo carro INVÁLIDO', async function () {
  //   const carInputInvalid: ICar = {
  //     model: 'Marea',
  //     color: 'Black',
  //     status: true,
  //     buyValue: 15.990,
  //     doorsQty: 4,
  //     seatsQty: 5,
  //   };
  //   sinon.stub(Model, 'create').resolves({});

  //   try {
  //     const service = new CarService();
  //     await service.register(carInputInvalid);
  //   } catch (error) {
  //     expect((error as Error).message).to.be.deep.equal();
  //   }
  // });

  it('Endpoint para listar todos os carros com SUCESSO', async function () {
    const carOutput: Car = new Car(  
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      },
    );
    sinon.stub(Model, 'find').resolves([carOutput]);
    const service = new CarService();

    const result = await service.getAllCars();
    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Endpoint para listar um carro pelo ID com SUCESSO', async function () {
    const carOutput: Car = new Car(  
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      },
    );
    sinon.stub(Model, 'findOne').resolves(carOutput);
    const service = new CarService();

    const result = await service.getCarById('634852326b35b59438fbea2f');
    expect(result).to.be.deep.equal(carOutput);
  });
});

// public async getCarById(id: string) {
//   if (!isValidObjectId(id)) throw new CustomError(422, 'Invalid mongo id');
//   const car = await this.carODM.getCarById(id);
//   // console.log('AGORAAAA', car);
  
//   if (!car) throw new CustomError(404, 'Car not found');
//   return this.createCarDomain(car);
// }