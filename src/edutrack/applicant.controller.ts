import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EdutrackService } from './edutrack.service';
import { UpdateEdutrackDto } from './dto/update-edutrack.dto';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';

@Controller('applicant')
export class ApplicantController {
  constructor(private readonly edutrackService: EdutrackService) {}

  @Post('evaluation')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createEvaluation(@Body() createEvaluationDto: CreateEvaluationDto) {
    return await this.edutrackService.createEvaluation(createEvaluationDto)
  }

  @Post()
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.edutrackService.createNewApplicant(createApplicantDto);
  }

  @Get()
  findAll() {
    return this.edutrackService.findAllApplicants();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
        return this.edutrackService.findOneApplicant(id);
        
    } catch (error) {
        console.log("error: ", error)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEdutrackDto: UpdateEdutrackDto) {
    return this.edutrackService.update(id, updateEdutrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.edutrackService.deleteUser(id);
  }
}