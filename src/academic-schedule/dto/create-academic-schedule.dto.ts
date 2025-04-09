import { IsNotEmpty, IsString } from 'class-validator';
// import { EAcademicSchedule } from '../Enums/academic-schedule.enum';

export class CreateAcademicScheduleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description?: string;
}
