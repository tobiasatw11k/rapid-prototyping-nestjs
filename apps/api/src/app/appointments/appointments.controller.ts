import { Controller, Get } from '@nestjs/common';
import { Appointment } from '@w11k/api-interfaces';
import { APPOINTMENTS } from './appointments.mock';

@Controller('appointments')
export class AppointmentsController {

  @Get()
  getAllApointments(): Appointment[] {
    return APPOINTMENTS;
  }
}
