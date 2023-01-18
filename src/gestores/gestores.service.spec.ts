import { Test, TestingModule } from '@nestjs/testing';
import { GestoresService } from './gestores.service';

describe('GestoresService', () => {
  let service: GestoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestoresService],
    }).compile();

    service = module.get<GestoresService>(GestoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
