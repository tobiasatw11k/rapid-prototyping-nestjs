import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Standort } from "./Standort";
import { Kfz } from "./Kfz";
import { ReperaturStatus } from "./ReperaturStatus";

@Index("PK__reperatu__3213E83FF5DE9152", ["id"], { unique: true })
@Entity("reperatur", { schema: "dbo" })
export class Reperatur {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "auftrag", nullable: true, length: 10 })
  auftrag: string | null;

  @ManyToOne(
    () => Standort,
    standort => standort.reperaturs
  )
  @JoinColumn([{ name: "standort_id", referencedColumnName: "id" }])
  standort: Standort;

  @ManyToOne(
    () => Kfz,
    kfz => kfz.reperaturs
  )
  @JoinColumn([{ name: "kfz_id", referencedColumnName: "id" }])
  kfz: Kfz;

  @ManyToOne(
    () => ReperaturStatus,
    reperaturStatus => reperaturStatus.reperaturs
  )
  @JoinColumn([{ name: "reperatur_status_id", referencedColumnName: "id" }])
  reperaturStatus: ReperaturStatus;
}
