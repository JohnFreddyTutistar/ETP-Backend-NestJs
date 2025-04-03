import { Module } from '@nestjs/common';
import { EdutrackService } from './edutrack.service';
import { EdutrackController } from './edutrack.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edutrack } from './entities/edutrack.entity';
import { Applicant } from './entities/applicants.entity';
import { ApplicantController } from './applicant.controller';
import { CallHistory } from './entities/call-history.entity';
import { CallHistoryController } from './callHistory.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        Edutrack, 
        Applicant, 
        CallHistory,
      ])],
  controllers: [
    EdutrackController,
    ApplicantController,
    CallHistoryController
  ],
  providers: [EdutrackService],
})
export class EdutrackModule {}
