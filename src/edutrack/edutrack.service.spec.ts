import { Test, TestingModule } from '@nestjs/testing';
import { EdutrackService } from './edutrack.service';

describe('EdutrackService', () => {
  let service: EdutrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdutrackService],
    }).compile();

    service = module.get<EdutrackService>(EdutrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
