import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule  } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CarpoolsModule } from './carpools/carpools.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    // Load environment variables globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Configure TypeORM with PostgreSQL
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true, // Set to false in production
        logging: true,     // Enables query logging
      }),
    }),
    UsersModule, 
    CarpoolsModule, 
    BookingsModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
