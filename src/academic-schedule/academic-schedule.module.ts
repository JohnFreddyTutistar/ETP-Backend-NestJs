import { Module } from '@nestjs/common';
import { AcademicScheduleService } from './academic-schedule.service';
import { AcademicScheduleController } from './academic-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicSchedule } from './entities/academic-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AcademicSchedule])], // Add your entities here
  controllers: [AcademicScheduleController],
  providers: [AcademicScheduleService],
})
export class AcademicScheduleModule {}
