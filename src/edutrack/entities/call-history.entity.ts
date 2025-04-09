import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Applicant } from './applicants.entity';

@Entity()
export class CallHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'numeric', nullable: true })
  duration?: number;

  @Column({ type: 'varchar', unique: false, length: 50 })
  results: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: true })
  observation?: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: true })
  tracing?: string;

  @ManyToOne(() => Applicant, (applicant) => applicant.callHistory, {
    onDelete: 'CASCADE',
  })
  applicant: Applicant;
}
