import {
  IsString,
  MinLength,
  IsEmail,
  IsDate,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { identificationType } from '../Enum/identificationType.enum';
import { EGender } from '../Enum/gender.enum';

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
  email: string;

  @Type(() => Date)
  @IsDate()
  birthDate: Date;

  @IsEnum(identificationType)
  identificationType: identificationType;

  @IsString()
  identificationNumber: string;

  @IsString()
  address?: string;

  @IsString()
  phoneNumber: string;

  @IsEnum(EGender)
  gender: EGender;
}
