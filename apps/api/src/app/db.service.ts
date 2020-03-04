import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Niederlassung } from '../entities/Niederlassung';
import { ReperaturStatus } from '../entities/ReperaturStatus';
import { Reperatur } from '../entities/Reperatur';

@Injectable()
export class DbService {
  constructor(private readonly connection: Connection) {
  }

  async loadAllNiederlassungen(): Promise<Niederlassung[]> {
    return this.connection.getRepository(Niederlassung).find();
  }

  loadNiederlassungById(id: number): Promise<Niederlassung> {
    return this.connection.getRepository(Niederlassung).findOne(id);
  }

  async loadAllReperaturStatus(): Promise<ReperaturStatus[]> {
    return this.connection.getRepository(ReperaturStatus).find();
  }

  async loadAllReperaturen(): Promise<Reperatur[]> {
    return this.connection.getRepository(Reperatur)
      .find({ relations: ['reperaturStatus', 'standort', 'kfz'] });
  }

}
