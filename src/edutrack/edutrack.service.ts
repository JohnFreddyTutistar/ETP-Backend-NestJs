/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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
    
    try {
      const user = this.EduTrackRepository.create(createEdutrackDto)
      
      return await this.EduTrackRepository.save(user);

    } catch (error) {
        if(error.code === '23505'){
          throw new BadRequestException('El correo ya esta registrado')
        } else {
          throw new InternalServerErrorException('Error al crear al usuario')
        }

    }

  }

  findAll() {
    const users = this.EduTrackRepository.find()
    return users;
  }

  async findOne(id: number) {
    return this.EduTrackRepository.findBy({id})
  }

  update(id: number, updateEdutrackDto: UpdateEdutrackDto) {
    return this.EduTrackRepository.update(id, updateEdutrackDto);
  }

  async remove(id: number) {
    return await this.EduTrackRepository.softDelete({ id })
  }
}
