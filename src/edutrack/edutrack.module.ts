import { Module } from '@nestjs/common';
import { EdutrackService } from './edutrack.service';
import { EdutrackController } from './edutrack.controller';

@Module({
  controllers: [EdutrackController],
  providers: [EdutrackService],
})
export class EdutrackModule {}
