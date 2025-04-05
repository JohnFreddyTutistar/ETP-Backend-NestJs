import { IsEmail, IsNotEmpty, IsString, MinLength, IsDate, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { Rol } from "../enums/rol.enum";
import { Faculty } from "../enums/faculty.enum";

export class CreateUserDto {

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

    @IsString()
    @MinLength(8)
    password: string;

    @Type(() => Date)
    @IsDate()
    birthDate: Date

    @IsEnum(Faculty)
    faculty: Faculty

    @IsString()
    address?: string

    @IsString()
    phoneNumber: string

    @IsEnum(Rol)
    rol: Rol

    @IsString()
    possition?: string

}
