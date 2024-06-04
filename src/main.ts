import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Torneo API')
    .setDescription(
      'API diseñada para facilitar la administración eficiente de torneos de esports en Colombia. Con esta plataforma, los usuarios pueden realizar operaciones como la creación, actualización, eliminación y consulta de información relacionada con torneos, jugadores y resultados. Ofrece características avanzadas como asignación aleatoria de competidores, registro de resultados detallados y opciones de filtrado y ordenamiento para una gestión completa de los eventos de esports.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  app.setGlobalPrefix('/v1/api');

  await app.listen(3000);
  console.log(`Application is running`);
}
bootstrap();
