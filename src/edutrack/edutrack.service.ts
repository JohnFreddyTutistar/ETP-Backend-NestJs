/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateEdutrackDto } from './dto/create-edutrack.dto';
import { UpdateEdutrackDto } from './dto/update-edutrack.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Edutrack } from './entities/edutrack.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EdutrackService {


  constructor(
    @InjectRepository(Edutrack)
    private EduTrackRepository: Repository<Edutrack>

  ){

  }

  async create(createEdutrackDto: CreateEdutrackDto) {
    const user = this.EduTrackRepository.create(createEdutrackDto)
    return await this.EduTrackRepository.save(user);
  }

  findAll() {
    const users = this.EduTrackRepository.find()
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} edutrack`;
  }

  update(id: number, updateEdutrackDto: UpdateEdutrackDto) {
    return `This action updates a #${id} edutrack`;
  }

  remove(id: number) {
    return `This action removes a #${id} edutrack`;
  }
}
