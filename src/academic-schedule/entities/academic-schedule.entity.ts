import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Inscription } from 'src/inscription/entities/inscription.entity';
import { Program } from 'src/program/entities/program.entity';

@Entity()
export class AcademicSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: true })
  isActive: boolean; // true or false, default is true

  @CreateDateColumn()
  crateAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => Inscription, (inscription) => inscription.academicSchedule)
  inscription: Inscription[];

  //Pendiente a enlazar a program
  @ManyToMany(() => Program, (program) => program.academicSchedule)
  @JoinTable()
  program: Program[];
}
