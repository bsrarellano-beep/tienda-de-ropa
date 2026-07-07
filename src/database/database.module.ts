import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers'; 
import { ConfigService } from '../config/config.service'; 
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    ConfigModule // 
  ],
  providers: [
    ...databaseProvider, 
    ConfigService
  ],
  exports: [
    ...databaseProvider 
  ], 
})
export class DatabaseModule {}