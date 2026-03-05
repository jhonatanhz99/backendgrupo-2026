import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql', 
                host: configService.get<string>('DB_HOST', 'localhost'),
                port: configService.get<number>('DB_PORT', 3306),
                username: configService.get<string>('DB_USER', 'root'),
                password: configService.get<string>('DB_PASSWORD', ''),
                database: configService.get<string>('DB_NAME', 'taller_backend'),
                autoLoadEntities: true,
                synchronize: true, // Use only in development
            }),
        }),
    ],
})
export class DatabaseModule { }
