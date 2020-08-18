import { Controller, Get } from '@nestjs/common';
import { Appointment } from '@w11k/api-interfaces';
import { AppointmentsService } from './appointments.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Controller('appointments')
export class AppointmentsController {

  constructor(private readonly appointmentService: AppointmentsService) {

  }

  @Get()
  getAllApointments(): Observable<Appointment[]> {
    return this.appointmentService.getAll().pipe(first());
  }
}
