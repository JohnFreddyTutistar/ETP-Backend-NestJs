import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Edutrack {

    // @PrimaryGeneratedColumn()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    @Column({ unique: true, nullable: true })
    email: string;

    @Column()
    age: number

    @Column()
    password: string;

    @Column({ nullable: true })
    birthDate: Date

    @DeleteDateColumn()
    deleteDateColumn?: Date

    @UpdateDateColumn()
    updateDateColumn?: Date

}
