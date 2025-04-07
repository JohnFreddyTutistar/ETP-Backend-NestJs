import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EdutrackService } from './edutrack.service';
import { CreateEdutrackDto } from './dto/create-edutrack.dto';
import { UpdateEdutrackDto } from './dto/update-edutrack.dto';

@Controller('edutrack')
export class EdutrackController {
  constructor(private readonly edutrackService: EdutrackService) {}

  @Post()
  create(@Body() createEdutrackDto: CreateEdutrackDto) {
    return this.edutrackService.create(createEdutrackDto);
  }

  @Get()
  findAll() {
    return this.edutrackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.edutrackService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEdutrackDto: UpdateEdutrackDto) {
    return this.edutrackService.update(id, updateEdutrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.edutrackService.remove(id);
  }
}
