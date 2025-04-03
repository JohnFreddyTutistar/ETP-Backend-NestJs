import { Type } from "class-transformer";
import { IsDate, IsInt, IsPositive, IsString } from "class-validator";

export class CreateCallHistoryDto {
    
    @Type(() => Date)
    @IsDate()
    date: Date;

    @IsInt()
    @IsPositive()
    duration: number;

    @IsString()
    results: string;

    @IsString()
    notes: string;

    @IsString()
    tracing: string;

}