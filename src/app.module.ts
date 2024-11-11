import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CarpoolsModule } from './carpools/carpools.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [UsersModule, CarpoolsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
