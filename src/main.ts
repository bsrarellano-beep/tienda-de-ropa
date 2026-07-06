import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //class validator
  app.useGlobalPipes(new ValidationPipe());
  // Configuración de Swagger 
  const config = new DocumentBuilder()
    .setTitle('Sistema Web de Gestión de Inventario y Ventas')
    .setDescription('API del sistema para el control de stock, productos, clientes y ventas de pequeños negocios.')
    .setVersion('1.0')
    .addTag('inventario')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Esto define que entrarás por http://localhost:3000/api
  await app.listen(3000);
  console.log(`Servidor corriendo en: http://localhost:3000/api`);
}
bootstrap();
