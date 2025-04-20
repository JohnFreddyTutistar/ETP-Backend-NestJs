import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Program } from 'src/program/entities/program.entity';
import { AcademicSchedule } from 'src/academic-schedule/entities/academic-schedule.entity';
import { Applicant } from 'src/edutrack/entities/applicants.entity';
import { EStatusApplicant } from '../enums/status-applicant.enum';

@Entity()
export class Inscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: EStatusApplicant,
  })
  status: EStatusApplicant;

  // @Column({ nullable: true })
  // status: string;

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => Program, (program) => program.inscription)
  program: Program;

  @ManyToOne(() => AcademicSchedule, (academiSchedule) => academiSchedule.id)
  academicSchedule: AcademicSchedule;

  @ManyToMany(() => Applicant, (applicant) => applicant.inscriptions)
  @JoinTable()
  applicants: Applicant[];
}
