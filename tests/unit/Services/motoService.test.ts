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
      model: 'Honda Cb 500f Hornet',
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
        model: 'Honda Cb 500f Hornet',
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

  it('Endpoint para listar todos as motos com SUCESSO', async function () {
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
    sinon.stub(Model, 'find').resolves([motoOutput]);
    const service = new MotoService();

    const result = await service.getAllMotos();
    expect(result).to.be.deep.equal([motoOutput]);
  });

  it('Endpoint para listar uma moto pelo ID com SUCESSO', async function () {
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
    sinon.stub(Model, 'findOne').resolves(motoOutput);
    const service = new MotoService();

    const result = await service.getMotoById('634852326b35b59438fbea2f');
    expect(result).to.be.deep.equal(motoOutput);
  });
});
