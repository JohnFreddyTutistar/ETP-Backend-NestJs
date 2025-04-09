import { Injectable } from '@nestjs/common';
import { CreateAcademicScheduleDto } from './dto/create-academic-schedule.dto';
import { UpdateAcademicScheduleDto } from './dto/update-academic-schedule.dto';

@Injectable()
export class AcademicScheduleService {
  create(createAcademicScheduleDto: CreateAcademicScheduleDto) {
    return 'This action adds a new academicSchedule';
  }

  findAll() {
    return `This action returns all academicSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academicSchedule`;
  }

  update(id: number, updateAcademicScheduleDto: UpdateAcademicScheduleDto) {
    return `This action updates a #${id} academicSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} academicSchedule`;
  }
}
