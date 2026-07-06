import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { personaProviders } from './persona.providers'; 
import { DatabaseModule } from 'src/database/database.module'; 

@Module({
  imports: [
    DatabaseModule 
  ],
  controllers: [PersonaController],
  providers: [
    ...personaProviders, 
    PersonaService
  ],
  exports: [
    ...personaProviders,
    PersonaService
  ]
})
export class PersonaModule {}