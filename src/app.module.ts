import { Module } from '@nestjs/common';
import { EdutrackModule } from './edutrack/edutrack.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EdutrackModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:  process.env.DB_HOST, //'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10), //5432,
      username: process.env.DB_USER, //'postgres',
      password: process.env.DB_PASSWORD, //'123456',
      database:  process.env.DB_NAME, //'newdb',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
