/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateEdutrackDto } from './dto/create-edutrack.dto';
import { UpdateEdutrackDto } from './dto/update-edutrack.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Edutrack } from './entities/edutrack.entity';
import { Applicant } from './entities/applicants.entity';
import { Repository } from 'typeorm';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { CreateCallHistoryDto } from './dto/create-call-history.dto';
import { CallHistory } from './entities/call-history.entity';
import { Evaluation } from './entities/evaluation.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';

@Injectable()
export class EdutrackService {
  constructor(
    @InjectRepository(Edutrack)
    private EduTrackRepository: Repository<Edutrack>,

    @InjectRepository(Applicant)
    private ApplicantRepository: Repository<Applicant>,

    @InjectRepository(CallHistory)
    private CallHistoryRepository: Repository<CallHistory>,

    @InjectRepository(Evaluation)
    private EvaluationRespository: Repository<Evaluation>
  ) {}

  async createNewApplicant(createApplicantDto: CreateApplicantDto) {
    const newUser = this.ApplicantRepository.create(createApplicantDto);

    return await this.ApplicantRepository.save(newUser);
  }

  async createEvaluation(dto: CreateEvaluationDto): Promise<Evaluation> {
    const applicant = await this.ApplicantRepository.findOne({where: {id: dto.applicantId}})

    if(!applicant){
      throw new NotFoundException('Aspirante no encontrado')
    }

    // calculos
    const interviewScore = (dto.interview * 5) / 100;
    const weightedInterview = parseFloat((interviewScore * 0.6).toFixed(2));

    const averageTest = (dto.math * 0.5) + (dto.readWrite * 0.5);
    const weightedTest = parseFloat((averageTest * 0.4).toFixed(2));

    const finalNote = parseFloat((weightedInterview + weightedTest).toFixed(2));
    const status = finalNote >= 3.2 ? 'APROBADO' : 'RECHAZADO';

    // Crear entidad
    const evaluation = this.EvaluationRespository.create({
      interview: dto.interview,
      math: dto.math,
      readWrite: dto.readWrite,
      interviewScore,
      averageTest,
      weightedInterview,
      weightedTest,
      finalNote,
      status,
      applicant,
    });

    return await this.EvaluationRespository.save(evaluation)
  }


  async createNewHistory(
    createCallHistoryDto: CreateCallHistoryDto,
    applicantId: string,
  ): Promise<CallHistory> {
    // Busca si el aspirante existe
    const applicant = await this.ApplicantRepository.findOne({
      where: { id: applicantId },
    });

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if (!applicant) {
      throw new NotFoundException('Applicant not found');
    }

    const newCallHistory = this.CallHistoryRepository.create({
      ...createCallHistoryDto,
    });

    newCallHistory.applicant = applicant;

    return await this.CallHistoryRepository.save(newCallHistory);
    // const savedHistory = await this.CallHistoryRepository.save(newCallHistory); // analizando esto...

    // // Agregar a la lista de historiales del aspirante
    // applicant.callHistory.push(savedHistory);
    // await this.ApplicantRepository.save(applicant);

    // return savedHistory;
  }

  async create(createEdutrackDto: CreateEdutrackDto) {
    try {
      const user = this.EduTrackRepository.create(createEdutrackDto);

      return await this.EduTrackRepository.save(user);
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error.code === '23505') {
        throw new BadRequestException('El correo ya esta registrado');
      } else {
        throw new InternalServerErrorException('Error al crear al usuario');
      }
    }
  }

  async findAllApplicants(): Promise<Applicant[]> {
    const applicants = await this.ApplicantRepository.find({
      relations: ['callHistory', 'inscriptions.program', 'evaluation'], // cargamos los historiales
    });

    // Asegura que callHistory no sea undefined
    return applicants.map((applicant) => ({
      ...applicant,
      callHistory: applicant.callHistory ?? [],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      // evaluationStatus: applicant.evaluation
    }));
  }

  async findAll() {
    const users = this.EduTrackRepository.find();
    return await users;
  }

  async findOneApplicant(id: string) {
    return await this.ApplicantRepository.findBy({ id });
  }

  async findOne(id: string) {
    return await this.EduTrackRepository.findBy({ id });
  }

  update(id: string, updateEdutrackDto: UpdateEdutrackDto) {
    return this.EduTrackRepository.update(id, updateEdutrackDto);
  }

  async remove(id: string) {
    return await this.EduTrackRepository.softDelete({ id });
  }

  async deleteUser(id: string) {
    return await this.ApplicantRepository.softDelete({ id });
  }
}
