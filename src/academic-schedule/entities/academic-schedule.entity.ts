import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EAcademicSchedule } from '../Enums/academic-schedule.enum';
import { Inscription } from 'src/inscription/entities/inscription.entity';

@Entity()
export class AcademicSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: EAcademicSchedule,
  })
  name: EAcademicSchedule;

  @Column()
  description?: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  crateAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => Inscription, (inscription) => inscription.academicSchedule)
  inscription: Inscription[];
}
