import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path'; // 
import { parse } from "dotenv";

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        const env = process.env.NODE_ENV || 'development';
        
        //  Con process.cwd() buscamos directamente en la raíz real del proyecto
        const envFilePath = path.resolve(process.cwd(), `.env.${env}`);
        const existsPath = fs.existsSync(envFilePath);

        if (!existsPath) {
            console.log(`[ConfigService] ERROR: El archivo ${envFilePath} no existe.`);
            process.exit(0);
        }

        this.envConfig = parse(fs.readFileSync(envFilePath));
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}