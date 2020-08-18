import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'w11k-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  @Input() appointment

  constructor() { }

  ngOnInit(): void {
  }

}
