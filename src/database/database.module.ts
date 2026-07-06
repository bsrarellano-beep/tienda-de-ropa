import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers'; 
import { ConfigService } from '../config/config.service'; 
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    ConfigModule // 👈 Mantenemos esto para que databaseProvider pueda usar las variables de entorno
  ],
  providers: [
    ...databaseProvider, 
    ConfigService
  ],
  exports: [
    ...databaseProvider // 👈 Exportamos la conexión manual para que los módulos la usen
  ], 
})
export class DatabaseModule {}