import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Torneo API')
    .setDescription('API para la gestión de torneos de esports')
    .setVersion('1.0')
    .addTag('torneo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  app.setGlobalPrefix('/v1/api');

  await app.listen(3000);
  console.log(`Application is running`);
}
bootstrap();
