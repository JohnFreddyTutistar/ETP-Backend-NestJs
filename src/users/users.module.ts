import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
// import { Program } from 'src/program/entities/program.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Add your entities here
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
