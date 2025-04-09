import { Module } from '@nestjs/common';
import { InscriptionService } from './inscription.service';
import { InscriptionController } from './inscription.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscription } from './entities/inscription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inscription])], // Add your entities here if needed
  controllers: [InscriptionController],
  providers: [InscriptionService],
})
export class InscriptionModule {}
