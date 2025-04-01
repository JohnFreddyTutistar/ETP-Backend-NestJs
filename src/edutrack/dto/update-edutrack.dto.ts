import { PartialType } from '@nestjs/mapped-types';
import { CreateEdutrackDto } from './create-edutrack.dto';

export class UpdateEdutrackDto extends PartialType(CreateEdutrackDto) {}
