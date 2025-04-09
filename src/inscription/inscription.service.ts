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

  update(id: number, updateInscriptionDto: UpdateInscriptionDto) {
    return `This action updates a #${id} inscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscription`;
  }
}
