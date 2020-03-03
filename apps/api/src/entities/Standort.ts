import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Reperatur } from "./Reperatur";
import { Niederlassung } from "./Niederlassung";

@Index("PK__standort__3213E83FE046960D", ["id"], { unique: true })
@Entity("standort", { schema: "dbo" })
export class Standort {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "autoline_id", length: 2 })
  autolineId: string;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @OneToMany(
    () => Reperatur,
    reperatur => reperatur.standort
  )
  reperaturs: Reperatur[];

  @ManyToOne(
    () => Niederlassung,
    niederlassung => niederlassung.standorts
  )
  @JoinColumn([{ name: "niederlassung_id", referencedColumnName: "id" }])
  niederlassung: Niederlassung;
}
