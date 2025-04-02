import { Column, DeleteDateColumn, Entity, UpdateDateColumn } from "typeorm";
import { identificationType } from "../Enum/identificationType.enum";

@Entity()
export class Applicant {

    @Column({ primary: true, generated: true })
    id: number;
    
    @Column()
    name: string;
    
    @Column({ unique: true, nullable: true })
    email: string;

    @Column()
    age: number

    @Column({ nullable: true })
    birthDate: Date

    @Column({
        type: 'enum',
        enum: identificationType
    })
    identificationType: identificationType

    @Column()
    identificationNumber: number

    @DeleteDateColumn()
    deleteDateColumn?: Date

    @UpdateDateColumn()
    updateDateColumn?: Date

}