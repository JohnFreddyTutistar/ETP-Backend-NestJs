import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademicScheduleDto } from './create-academic-schedule.dto';

export class UpdateAcademicScheduleDto extends PartialType(CreateAcademicScheduleDto) {}
