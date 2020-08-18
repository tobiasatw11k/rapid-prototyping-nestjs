import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentListRouteComponent } from './appointment-list-route/appointment-list-route.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentDetailRouteComponent } from './appointment-detail-route/appointment-detail-route.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';


@NgModule({
  declarations: [AppointmentListRouteComponent, AppointmentListComponent, AppointmentDetailRouteComponent, AppointmentDetailComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    HttpClientModule
  ]
})
export class AppointmentsModule {
}
