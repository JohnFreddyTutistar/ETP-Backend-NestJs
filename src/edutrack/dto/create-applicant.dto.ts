import { IsString, MinLength, IsEmail, IsInt, IsPositive, IsDate, IsEnum, IsNotEmpty } from "class-validator"
import { Type } from "class-transformer"
import { identificationType } from "../Enum/identificationType.enum"
import { gender } from "../Enum/gender.enum";

export class CreateApplicantDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    firstName: string;

    @IsString()
    secondName?: string;

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    firstLastName: string;

    @IsString()
    secondLastName?: string;

    @IsEmail()
    email: string

    @IsInt()
    @IsPositive()
    age: number

    @Type(() => Date)
    @IsDate()
    birthDate: Date

    @IsEnum(identificationType)
    identificationType: identificationType

    @IsString()
    identificationNumber: string

    @IsString()
    address?: string

    @IsString()
    phoneNumber: string

    @IsEnum(gender)
    gender: gender

    @IsString()
    status: string
}