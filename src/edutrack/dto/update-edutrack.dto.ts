import { PartialType } from '@nestjs/mapped-types';
import { CreateEdutrackDto } from './create-edutrack.dto';
import { IsDate, IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, Min, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateEdutrackDto extends PartialType(CreateEdutrackDto) {

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

    @IsString()
    @IsNotEmpty()
    password?: string

}
