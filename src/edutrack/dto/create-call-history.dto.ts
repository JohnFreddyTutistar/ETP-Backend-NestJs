import { Type } from "class-transformer";
import { IsDate, IsInt, IsString } from "class-validator";

export class CreateCallHistoryDto {
    
    @Type(() => Date)
    @IsDate()
    date: Date;

    @IsInt()
    duration?: number; 

    @IsString()
    results: string; 

    @IsString()
    observation?: string; 

    @IsString()
    tracing?: string; 

}