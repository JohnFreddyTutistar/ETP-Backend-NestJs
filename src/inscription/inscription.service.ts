import { Injectable } from '@nestjs/common';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { UpdateInscriptionDto } from './dto/update-inscription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inscription } from './entities/inscription.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InscriptionService {
  constructor(
    @InjectRepository(Inscription)
    private inscriptionRepository: Repository<Inscription>,
  ) {}

  async create(createInscriptionDto: CreateInscriptionDto) {

    // Verificar si el aspirante existe
    // let applicant = await this.applicantRepository.findOne({
    //   where: {
    //     identificationNumber: createInscriptionDto.identificationNumber,
    //     identificationType: createInscriptionDto.identificationType
    //   },  
    // })
    
    // Si no existe lo crea
    // if(!applicant){
    //   applicant = this.applicantRepository.create({
    //     identificationType: createInscriptionDto.identificationType,
    //     identificationNumber: createInscriptionDto.identificationNumber,
    //     firstName: createInscriptionDto.firstName,
    //     secondName: createInscriptionDto.secondName,
    //     firstLastName: createInscriptionDto.firstLastName,
    //     secondLastName: createInscriptionDto.secondLastName,
    //     gender: createInscriptionDto.gender,
    //     birthDate: createInscriptionDto.birthDate,
    //     phoneNumber: createInscriptionDto.phoneNumber,
    //     email: createInscriptionDto.email,
    //     address: createInscriptionDto.address
    //   });
    //   await this.applicantRepository.save(applicant)
    // }

    // verificar que el programa exista
    // const program = await this.programRepository.findOne({
    //   where: { id: createInscriptionDto.program }
    // })

    // if(!program){
    //   throw new NotFoundException('Programa académico no encontrado')
    // }

    // const academicSchedule = await this.academicScheduleRepository.findOne({
    //   where: { id: createInscriptionDto.academicSchedule }
    // })

    // Crear la inscripción
    const newInscription =
      this.inscriptionRepository.create(createInscriptionDto);
    return await this.inscriptionRepository.save(newInscription);
  }

  async findAll(): Promise<Inscription[]> {
    const inscriptions = await this.inscriptionRepository.find({
      relations: ['program'],
    });
    return inscriptions;
  }

  findOne(id: number) {
    return `This action returns a #${id} inscription`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateInscriptionDto: UpdateInscriptionDto) {
    return `This action updates a #${id} inscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscription`;
  }
}
