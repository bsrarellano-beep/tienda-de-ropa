import { DataSource } from 'typeorm';
import { Persona } from './entities/persona.entity';

export const personaProviders = [
  {
    provide: 'PERSONA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Persona),
    inject: ['DATABASE_CONNECTION_POSTGRES'],
  },
];