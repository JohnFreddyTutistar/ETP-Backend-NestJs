import { Test, TestingModule } from '@nestjs/testing';
import { EdutrackController } from './edutrack.controller';
import { EdutrackService } from './edutrack.service';

describe('EdutrackController', () => {
  let controller: EdutrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdutrackController],
      providers: [EdutrackService],
    }).compile();

    controller = module.get<EdutrackController>(EdutrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
