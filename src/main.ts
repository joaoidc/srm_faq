import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix('api', { exclude: ['/', '/admin', '/admin/(.*)', '/health'] });
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 SRM FAQ API: http://localhost:${port}`);
  console.log(`📝 Admin: http://localhost:${port}/admin`);
}

bootstrap();
