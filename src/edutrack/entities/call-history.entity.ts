import { Column, Entity, ManyToOne } from "typeorm";
import { Applicant } from "./applicants.entity";

@Entity()
export class CallHistory {

    @Column ({primary: true, generated: true})
    id: number

    @Column ({type: "date"})
    date: Date

    @Column ({type: "numeric", nullable: true})
    duration: number

    @Column ({type: "varchar", unique: false, length: 50, nullable: true})
    results: string

    @Column ({type: "varchar", unique: false, length: 50, nullable: true})
    notes: string

    @Column ({type: "varchar", unique: false, length: 50, nullable: true})
    tracing: string

    @ManyToOne(() => Applicant, applicant => applicant.callHistory, {
        onDelete: 'CASCADE'
    })
    applicantId: Applicant

}