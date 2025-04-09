import { Inscription } from 'src/inscription/entities/inscription.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Program {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  faculty: string;

  @CreateDateColumn()
  createAt?: Date;

  @DeleteDateColumn()
  deleteAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @OneToMany(() => User, (user) => user.program, {
    cascade: false,
    nullable: true,
  })
  user: User[];

  @OneToMany(() => Inscription, (inscription) => inscription.id, {
    cascade: false,
    nullable: true,
  })
  inscription: Inscription[];
}
