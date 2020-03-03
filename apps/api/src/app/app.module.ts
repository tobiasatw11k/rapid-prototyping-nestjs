import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Niederlassung } from '../entities/Niederlassung';
import { Standort } from '../entities/Standort';
import { Reperatur } from '../entities/Reperatur';
import { Kfz } from '../entities/Kfz';
import { ReperaturStatus } from '../entities/ReperaturStatus';
import { DbService } from './db.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    name: "default",
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "workshop_prototype",
    password: "s4fePassword",
    database: "workshop_prototype",
    schema: "dbo",
    synchronize: false,
    entities: [
      Niederlassung,
      Standort,
      Kfz,
      ReperaturStatus,
      Reperatur,
    ]
  })],
  controllers: [AppController],
  providers: [AppService, DbService]
})
export class AppModule {}
