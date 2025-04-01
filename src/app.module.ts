import { Module } from '@nestjs/common';
import { EdutrackModule } from './edutrack/edutrack.module';

@Module({
  imports: [EdutrackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
