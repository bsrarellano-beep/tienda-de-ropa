import { DataSource } from "typeorm";
import { ConfigService } from "../config/config.service"; 
import { Configuration } from "src/config/config.key";

export const databaseProvider = [
    {
        provide: "DATABASE_CONNECTION_POSTGRES", 
        inject: [ConfigService], 
        useFactory: async (config: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: config.get(Configuration.HOST),
                // Aquí lee el puerto de tu archivo .env.development (5432) y lo convierte a número
                port: parseInt(config.get(Configuration.PORT)), 
                username: config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD),
                database: config.get(Configuration.DATABASE),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false, 
            });

            return dataSource.initialize();
        }
    }
];