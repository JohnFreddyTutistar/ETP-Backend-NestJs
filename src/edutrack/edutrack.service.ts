/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEdutrackDto } from './dto/create-edutrack.dto';
import { UpdateEdutrackDto } from './dto/update-edutrack.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Edutrack } from './entities/edutrack.entity';
import { Applicant } from './entities/applicants.entity';
import { Repository } from 'typeorm';
import { CreateApplicantDto } from './dto/create-applicant.dto';

@Injectable()
export class EdutrackService {


  constructor(
    @InjectRepository(Edutrack)
    private EduTrackRepository: Repository<Edutrack>,

    @InjectRepository(Applicant)
    private ApplicantRepository: Repository<Applicant>

  ){

  }

  async createNewApplicant(createApplicantDto: CreateApplicantDto ) {
    const newUser = this.ApplicantRepository.create(createApplicantDto)

    return await this.ApplicantRepository.save(newUser)

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

  async findAllApplicants() {
    const findApplicant = this.ApplicantRepository.find()
    return await findApplicant
  }

  async findAll() {
    const users = this.EduTrackRepository.find()
    return await users;
  }

  async findOneApplicant(id: number) {
    return await this.ApplicantRepository.findBy({id})
  }

  async findOne(id: number) {
    return await this.EduTrackRepository.findBy({id})
  }

  update(id: number, updateEdutrackDto: UpdateEdutrackDto) {
    return this.EduTrackRepository.update(id, updateEdutrackDto);
  }

  async remove(id: number) {
    return await this.EduTrackRepository.softDelete({ id })
  }
}
