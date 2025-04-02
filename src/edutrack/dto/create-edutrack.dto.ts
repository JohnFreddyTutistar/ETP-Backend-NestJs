import { Type } from "class-transformer";
import { IsDate, IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateEdutrackDto {

    @IsString()
    @MinLength(3)
    name: string

    @IsEmail()
    email: string

    @IsInt()
    @IsPositive()
    @Min(15)
    age: number

    @Type(() => Date)
    @IsDate()
    birthDate: Date

    @IsString()
    @IsNotEmpty()
    password: string

}
