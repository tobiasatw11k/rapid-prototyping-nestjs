import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Reperatur } from "./Reperatur";

@Index("PK__reperatu__3213E83F07518E78", ["id"], { unique: true })
@Entity("reperatur_status", { schema: "dbo" })
export class ReperaturStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "status", length: 20 })
  status: string;

  @OneToMany(
    () => Reperatur,
    reperatur => reperatur.reperaturStatus
  )
  reperaturs: Reperatur[];
}
