export interface Message {
  message: string;
}

export interface Vehicle {
  regNo: string;
  owner: string;
}

export interface Appointment {
  id?: number;
  assignment: string;
  branch: string;
  vehicle: Vehicle;
  status: string;
  time: string;
}
