import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsController } from './appointments/appointments.controller';

@Module({
  imports: [],
  controllers: [AppController, AppointmentsController],
  providers: [AppService],
})
export class AppModule {}
