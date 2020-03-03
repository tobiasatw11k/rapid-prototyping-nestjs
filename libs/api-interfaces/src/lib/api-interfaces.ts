export interface Message {
  message: string;
}

export interface IStandort {
  id: number;
  autolineId: string;
  name: string | null;
}

export interface INiederlassung {
  id: number;
  gssn: string
  name: string | null;
  standorte: IStandort[]
}

export interface IKfz {
  id: number;
  regno: string | null;
  besitzer: string | null;
}

export type IReperaturStatus = 'Termin' | 'Annahme' | 'Service' | 'Werkstatt' | 'Wäsche' | 'Abholung' | 'Abgeschlossen';

export interface IReperatur {
  id: number;
  auftrag: string | null;
  standort: IStandort,
  kfz: IKfz,
  reperaturStatus: IReperaturStatus
}
