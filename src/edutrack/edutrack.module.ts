import { Module } from '@nestjs/common';
import { EdutrackService } from './edutrack.service';
import { EdutrackController } from './edutrack.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edutrack } from './entities/edutrack.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Edutrack])],
  controllers: [EdutrackController],
  providers: [EdutrackService],
})
export class EdutrackModule {}
