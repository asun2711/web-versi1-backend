import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // ======= WAIT FOR DATABASE =======
  const dataSource = app.get(DataSource);
  let connected = false;
  let attempts = 0;

  while (!connected && attempts < 5) {
    try {
      await dataSource.initialize();
      connected = true;
      console.log('✅ Database connected!');
    } catch (err) {
      attempts++;
      console.log(`⚠️ Database not ready, retrying... (${attempts}/5)`);
      await new Promise((r) => setTimeout(r, 5000)); // tunggu 5 detik
    }
  }

  if (!connected) {
    console.error('❌ Failed to connect to database after 5 attempts.');
    process.exit(1);
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
