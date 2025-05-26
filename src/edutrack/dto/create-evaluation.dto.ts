import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateEvaluationDto {
  @IsNumber()
  @Min(0)
  @Max(100)
  interview: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  math: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  readWrite: number;

  @IsString()
  applicantId: string;
}