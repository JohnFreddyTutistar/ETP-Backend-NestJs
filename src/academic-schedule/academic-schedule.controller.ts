import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicScheduleService } from './academic-schedule.service';
import { CreateAcademicScheduleDto } from './dto/create-academic-schedule.dto';
import { UpdateAcademicScheduleDto } from './dto/update-academic-schedule.dto';

@Controller('academic-schedule')
export class AcademicScheduleController {
  constructor(private readonly academicScheduleService: AcademicScheduleService) {}

  @Post()
  create(@Body() createAcademicScheduleDto: CreateAcademicScheduleDto) {
    return this.academicScheduleService.create(createAcademicScheduleDto);
  }

  @Get()
  findAll() {
    return this.academicScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicScheduleDto: UpdateAcademicScheduleDto) {
    return this.academicScheduleService.update(+id, updateAcademicScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicScheduleService.remove(+id);
  }
}
