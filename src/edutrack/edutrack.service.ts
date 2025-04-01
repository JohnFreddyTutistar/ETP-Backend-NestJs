/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateEdutrackDto } from './dto/create-edutrack.dto';
import { UpdateEdutrackDto } from './dto/update-edutrack.dto';

@Injectable()
export class EdutrackService {
  create(createEdutrackDto: CreateEdutrackDto) {
    return 'This action adds a new edutrack';
  }

  findAll() {
    return `This action returns all edutrack`;
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
