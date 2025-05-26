import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Applicant } from "./applicants.entity";

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  interview: number; // calificacion original (0-100)

  @Column('float')
  math: number; // 0-5

  @Column('float')
  readWrite: number; // 0-5

  @Column('float')
  interviewScore: number; // convertido a 0-5

  @Column('float')
  averageTest: number; // promedio

  @Column('float')
  weightedInterview: number; //ponderado entrevista

  @Column('float')
  weightedTest: number; // ponderado prueba

  @Column('float')
  finalNote: number;

  @Column({ default: 'EN REVISIÓN' })
  status: string;

  @CreateDateColumn()
  evaluationDate: Date;

  @ManyToOne(() => Applicant, (applicant) => applicant.evaluation, {
    eager: true,
  })
  applicant: Applicant;
}