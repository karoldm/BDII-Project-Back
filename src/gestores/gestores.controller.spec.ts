import { Test, TestingModule } from '@nestjs/testing';
import { GestoresController } from './gestores.controller';
import { GestoresService } from './gestores.service';

describe('GestoresController', () => {
  let controller: GestoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestoresController],
      providers: [GestoresService],
    }).compile();

    controller = module.get<GestoresController>(GestoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
