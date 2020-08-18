import { Injectable } from '@nestjs/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '@w11k/api-interfaces';
import { APPOINTMENTS } from './appointments.mock';

@Injectable()
export class AppointmentsService {
  appointments$ = new BehaviorSubject<Appointment[]>(APPOINTMENTS);

  getAll(): Observable<Appointment[]> {
    return this.appointments$.asObservable();
  }
}
