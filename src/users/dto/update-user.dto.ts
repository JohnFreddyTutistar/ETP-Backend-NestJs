import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Faculty } from '../enums/faculty.enum';
import { Rol } from '../enums/rol.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  firstName?: string;

  @IsString()
  secondName?: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  firstLastName?: string;

  @IsString()
  secondLastName?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(8)
  password?: string;

  @Type(() => Date)
  @IsDate()
  birthDate?: Date;

  @IsEnum(Faculty)
  faculty?: Faculty;

  @IsString()
  phoneNumber?: string;

  @IsEnum(Rol)
  rol?: Rol;

  @IsString()
  possition?: string;
}
