import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    name: "default",
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "s4fePassword",
    database: "workshop_prototype",
    schema: "dbo",
    synchronize: false,
    entities: []
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
