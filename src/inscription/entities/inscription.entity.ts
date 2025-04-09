import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EStatusApplicant } from '../enums/status-applicant.enum';
import { Program } from 'src/program/entities/program.entity';
import { AcademicSchedule } from 'src/academic-schedule/entities/academic-schedule.entity';
import { Applicant } from 'src/edutrack/entities/applicants.entity';

@Entity()
export class Inscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: EStatusApplicant,
  })
  status: EStatusApplicant;

  @Column()
  insctiptionDate?: Date;

  @ManyToOne(() => Program, (program) => program.inscription)
  program: Program;

  @ManyToOne(() => AcademicSchedule, (academiSchedule) => academiSchedule.id)
  academicSchedule: AcademicSchedule;

  @ManyToMany(() => Applicant, (applicant) => applicant.inscriptions)
  @JoinTable()
  applicants: Applicant[];
}
