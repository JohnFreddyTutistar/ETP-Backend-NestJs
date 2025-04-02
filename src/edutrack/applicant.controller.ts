import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EdutrackService } from './edutrack.service';
import { UpdateEdutrackDto } from './dto/update-edutrack.dto';
import { CreateApplicantDto } from './dto/create-applicant.dto';

@Controller('applicant')
export class ApplicantController {
  constructor(private readonly edutrackService: EdutrackService) {}

  @Post()
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.edutrackService.createNewApplicant(createApplicantDto);
  }

  @Get()
  findAll() {
    return this.edutrackService.findAllApplicants();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    try {
        return this.edutrackService.findOneApplicant(id);
        
    } catch (error) {
        console.log("error: ", error)
    }
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEdutrackDto: UpdateEdutrackDto) {
    return this.edutrackService.update(id, updateEdutrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.edutrackService.remove(id);
  }
}