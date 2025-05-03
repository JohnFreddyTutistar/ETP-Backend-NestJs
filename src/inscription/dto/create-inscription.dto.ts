import { IsEnum, IsNotEmpty } from 'class-validator';
import { EStatusApplicant } from '../enums/status-applicant.enum';

export class CreateInscriptionDto {
  @IsNotEmpty()
  @IsEnum(EStatusApplicant)
  status: EStatusApplicant;

  // @IsEnum(EIdentificationType)
  // identificationType: EIdentificationType;

  // identificationNumber: string;

  // firstName: string;

  // secondName?: string;

  // firstLastName: string;

  // secondLastName?: string;

  // @IsEnum(EGender)
  // gender: EGender;

  // birthDate: string;

  // phoneNumber: string;

  // email: string;

  // address: string;

  // program: string;

  // academicSchedule: string;
}
