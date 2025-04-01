import { Column, Entity } from "typeorm";

@Entity()
export class Edutrack {

    // @PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true })
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    age: number

    @Column()
    password: string;

    @Column({nullable: true})
    deleteDateColumn: Date

}
