import { Controller, Get } from '@nestjs/common';

import { INiederlassung, IReperaturStatus, Message } from '@tss/api-interfaces';

import { AppService } from './app.service';
import { Reperatur } from '../entities/Reperatur';
import { DbService } from './db.service';
import { Niederlassung } from '../entities/Niederlassung';
import { ReperaturStatus } from '../entities/ReperaturStatus';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly dbService: DbService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('niederlassung')
  async getNiederlassungen(): Promise<INiederlassung[]> {
    const fromDB = await this.dbService.loadAllNiederlassungen();
    return fromDB.map(n => ({...n, standorte: n.standorts}));
  }

  @Get('niederlassung/:id')
  async getNiederlassungBy(id: number): Promise<INiederlassung> {
    const fromDB = await this.dbService.loadNiederlassungById(id)
    return {...fromDB, standorte: fromDB.standorts};
  }

  @Get('reperatur-status')
  async getReperaturen(): Promise<IReperaturStatus[]> {
    const fromDB = await this.dbService.loadAllReperaturStatus();
    return fromDB.map(it => (it.status as IReperaturStatus));
  }
}
