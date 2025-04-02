import { Module } from '@nestjs/common';
import { EdutrackModule } from './edutrack/edutrack.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    EdutrackModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'newdb',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
