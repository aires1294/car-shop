import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import IMoto from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotoService from '../../../src/Services/MotoService';

// const RESULT_ERROR = 'Invalid Key';

describe('Deveria validar e criar novas motos', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Criando um veículo do tipo moto com SUCESSO', async function () {
    const motoInput: IMoto = {
      model: 'Honda Cb 600f Hornet',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motoOutput: Motorcycle = new Motorcycle(  
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        category: 'Street',
        engineCapacity: 600,
      },
          
    );
    sinon.stub(Model, 'create').resolves(motoOutput);

    const service = new MotoService();
    const result = await service.registerMoto(motoInput);

    expect(result).to.be.deep.equal(motoOutput);
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

  //   it('Endpoint para listar todos os carros com SUCESSO', async function () {
  //     const carOutput: Car = new Car(  
  //       {
  //         id: '634852326b35b59438fbea2f',
  //         model: 'Marea',
  //         year: 1992,
  //         color: 'Red',
  //         status: true,
  //         buyValue: 12.000,
  //         doorsQty: 2,
  //         seatsQty: 5,
  //       },
  //     );
  //     sinon.stub(Model, 'find').resolves([carOutput]);
  //     const service = new CarService();

//     const result = await service.getAllCars();
//     expect(result).to.be.deep.equal([carOutput]);
//   });
});
