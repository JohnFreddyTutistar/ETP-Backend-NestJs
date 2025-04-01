import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateEdutrackDto {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    email: string;

}
