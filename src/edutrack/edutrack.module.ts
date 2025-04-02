import { Module } from '@nestjs/common';
import { EdutrackService } from './edutrack.service';
import { EdutrackController } from './edutrack.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edutrack } from './entities/edutrack.entity';
import { Applicant } from './entities/applicants.entity';
import { ApplicantController } from './applicant.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Edutrack, Applicant])],
  controllers: [
    EdutrackController,
    ApplicantController
  ],
  providers: [EdutrackService],
})
export class EdutrackModule {}
