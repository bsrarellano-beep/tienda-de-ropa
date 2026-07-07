import { Test, TestingModule } from '@nestjs/testing';
import { TallaController } from './talla.controller';
import { TallaService } from './talla.service';

describe('TallaController', () => {
  let controller: TallaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TallaController],
      providers: [TallaService],
    }).compile();

    controller = module.get<TallaController>(TallaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
