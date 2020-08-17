import { Appointment } from '@w11k/api-interfaces';

export const APPOINTMENTS: Appointment[] = [
  {
    assignment: '000-000-01',
    branch: 'Dortmund',
    status: 'Reperatur',
    time: "2020-09-02T07:00+02",
    vehicle: {
      owner: "Sascha",
      regNo: "ES-WW-01"
    }
  },
  {
    assignment: '000-000-02',
    branch: 'Berlin',
    status: 'Abholung',
    time: "2020-09-03T07:00+02",
    vehicle: {
      owner: "Tobi",
      regNo: "B-WW-22"
    }
  }
];
