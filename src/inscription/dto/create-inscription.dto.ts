import { IsEnum, IsNotEmpty } from 'class-validator';
import { EStatusApplicant } from '../enums/status-applicant.enum';

export class CreateInscriptionDto {
  @IsNotEmpty()
  @IsEnum(EStatusApplicant)
  status: EStatusApplicant;
  // @IsString()
  // status: string;
}
