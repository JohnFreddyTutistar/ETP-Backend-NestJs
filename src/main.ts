import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

  app.setGlobalPrefix("api/v1");

  // configurando de forma global las validaciones de los datos de entrada
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Lista blanca DTO
      forbidNonWhitelisted: true, // Da error al cliente si intenta mandar un dato erroneo
      transform: true // trandorma los datos siempre y cuando pueda
    })
  )

  app.enableCors()

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
