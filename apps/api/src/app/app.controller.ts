import { Controller, Get } from '@nestjs/common';

import { Message } from '@tss/api-interfaces';

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
  async getNiederlassungen(): Promise<Niederlassung[]> {
    return this.dbService.loadAllNiederlassungen();
  }

  @Get('niederlassung/:id')
  async getNiederlassungBy(id: number): Promise<Niederlassung> {
    return this.dbService.loadNiederlassungById(id);
  }

  @Get('reperatur-status')
  async getReperaturen(): Promise<ReperaturStatus[]> {
    return this.dbService.loadAllReperaturStatus();
  }
}
