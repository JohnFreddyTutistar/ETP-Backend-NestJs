import { Injectable } from '@nestjs/common';
import { CreateAcademicScheduleDto } from './dto/create-academic-schedule.dto';
import { UpdateAcademicScheduleDto } from './dto/update-academic-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicSchedule } from './entities/academic-schedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcademicScheduleService {
  constructor(
    @InjectRepository(AcademicSchedule)
    private academicScheduleRepository: Repository<AcademicSchedule>,
  ) {}

  async create(createAcademicScheduleDto: CreateAcademicScheduleDto) {
    const newAcademicSchedule = this.academicScheduleRepository.create(
      createAcademicScheduleDto,
    );
    return await this.academicScheduleRepository.save(newAcademicSchedule);
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
