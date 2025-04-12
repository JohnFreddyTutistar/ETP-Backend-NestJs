import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Faculty } from 'src/users/enums/faculty.enum';
import { Rol } from 'src/users/enums/rol.enum';

export class CreateNewUserDto {
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
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @Type(() => Date)
  @IsDate()
  birthDate: Date;

  @IsEnum(Faculty)
  faculty: Faculty;

  @IsString()
  phoneNumber: string;

  @IsEnum(Rol)
  rol: Rol;

  @IsString()
  possition?: string;
}
