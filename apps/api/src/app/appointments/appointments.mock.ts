import { Appointment } from '@w11k/api-interfaces';

export const APPOINTMENTS: Appointment[] = [
  {
    id: 1,
    assignment: '000-000-01',
    branch: 'Dortmund',
    status: 'Reperatur',
    time: "2020-09-02T07:00+02:00",
    vehicle: {
      owner: "Sascha",
      regNo: "ES-WW-01"
    }
  },
  {
    id: 2,
    assignment: '000-000-02',
    branch: 'Berlin',
    status: 'Abholung',
    time: "2020-09-03T08:00+02:00",
    vehicle: {
      owner: "Tobi",
      regNo: "B-WW-22"
    }
  }
];
