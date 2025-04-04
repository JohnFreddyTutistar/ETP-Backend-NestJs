import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from "typeorm";
import { identificationType } from "../Enum/identificationType.enum";
import { CallHistory } from "./call-history.entity";
import { gender } from "../Enum/gender.enum";

@Entity()
export class Applicant {

    @Column({ primary: true, generated: true })
    id: number;
    
    @Column()
    firstName: string;

    @Column()
    secondName?: string;

    @Column()
    firstLastName: string;

    @Column()
    secondLastName?: string;
    
    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ type: 'int', nullable: false })
    age: number

    @Column({ nullable: true })
    birthDate: Date

    @Column({
        type: 'enum',
        enum: identificationType
    })
    identificationType: identificationType

    @Column({ unique: true })
    identificationNumber: string

    @Column({ nullable: true })
    address?: string;

    @Column({ nullable: false })
    phoneNumber: string

    @Column({
        type: 'enum',
        enum: gender
    })
    gender: gender

    @Column()
    status: string

    @CreateDateColumn()
    createAt?: Date

    @DeleteDateColumn()
    deleteAt?: Date

    @UpdateDateColumn()
    updateAt?: Date

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => CallHistory, history => history.applicantId, {
        cascade: true, nullable: true
    })
    callHistory: CallHistory[]

}