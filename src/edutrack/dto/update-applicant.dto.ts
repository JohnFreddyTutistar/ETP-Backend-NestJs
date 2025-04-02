import { IsString, MinLength, IsEmail, IsInt, IsPositive, Min, IsDate, IsEnum } from "class-validator"
import { Type } from "class-transformer"
import { identificationType } from "../Enum/identificationType.enum"

export class CreateApplicantDto {
    @IsString()
    @MinLength(3)
    name?: string

    @IsEmail()
    email?: string

    @IsInt()
    @IsPositive()
    @Min(15)
    age?: number

    @Type(() => Date)
    @IsDate()
    birthDate?: Date

    @IsEnum(identificationType)
    identificationType?: identificationType

    @IsInt()
    @IsPositive()
    identificationNumber?: number
}