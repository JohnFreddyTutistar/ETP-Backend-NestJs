import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator";

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

    @IsString()
    @IsNotEmpty()
    password: string

}
