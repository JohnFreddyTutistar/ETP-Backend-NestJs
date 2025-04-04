/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEdutrackDto } from './dto/create-edutrack.dto';
import { UpdateEdutrackDto } from './dto/update-edutrack.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Edutrack } from './entities/edutrack.entity';
import { Applicant } from './entities/applicants.entity';
import { Repository } from 'typeorm';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { CreateCallHistoryDto } from './dto/create-call-history.dto';
import { CallHistory } from './entities/call-history.entity';

@Injectable()
export class EdutrackService {


  constructor(
    @InjectRepository(Edutrack)
    private EduTrackRepository: Repository<Edutrack>,

    @InjectRepository(Applicant)
    private ApplicantRepository: Repository<Applicant>,

    @InjectRepository(CallHistory)
    private CallHistoryRepository: Repository<CallHistory>

  ){

  }

  async createNewApplicant(createApplicantDto: CreateApplicantDto ) {
    const newUser = this.ApplicantRepository.create(createApplicantDto)

    return await this.ApplicantRepository.save(newUser)

  }

  async createNewHistory(createCallHistoryDto: CreateCallHistoryDto, applicantId: number): Promise<CallHistory>{

    // Busca si el aspirante existe
    const applicant = await this.ApplicantRepository.findOne({where: {id: applicantId}})

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if(!applicant){
      throw new NotFoundException('Applicant not found')
    }

    const newCallHistory = this.CallHistoryRepository.create({
      ...createCallHistoryDto,
    });

    newCallHistory.applicantId = applicant;

    return await this.CallHistoryRepository.save(newCallHistory)
    // const savedHistory = await this.CallHistoryRepository.save(newCallHistory); // analizando esto...

    // // Agregar a la lista de historiales del aspirante
    // applicant.callHistory.push(savedHistory);
    // await this.ApplicantRepository.save(applicant);

    // return savedHistory;
  }

  async create(createEdutrackDto: CreateEdutrackDto) {
    
    try {
      const user = this.EduTrackRepository.create(createEdutrackDto)
      
      return await this.EduTrackRepository.save(user);

    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if(error.code === '23505'){
          throw new BadRequestException('El correo ya esta registrado')
        } else {
          throw new InternalServerErrorException('Error al crear al usuario')
        }

    }

  }

  async findAllApplicants(): Promise<Applicant[]> {
    const applicants = await this.ApplicantRepository.find({
      relations: ['callHistory'], // cargamos los historiales
    });

    // Asegura que callHistory no sea undefined
    return applicants.map(applicant => ({
      ...applicant,
      callHistory: applicant.callHistory ?? []   
    }));
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

  async deleteUser(id: number) {
    return await this.ApplicantRepository.softDelete({ id });
  }
}
