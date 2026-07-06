import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { categoriaProviders } from './categoria.provide'; 
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule 
  ],
  controllers: [CategoriaController],
  providers: [
    ...categoriaProviders, 
    CategoriaService,
  ],
  exports: [
    ...categoriaProviders, 
    CategoriaService,
  ],
})
export class CategoriaModule {}