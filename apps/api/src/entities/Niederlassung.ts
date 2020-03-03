import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Standort } from "./Standort";

@Index("PK__niederla__3213E83F073C9A39", ["id"], { unique: true })
@Entity("niederlassung", { schema: "dbo" })
export class Niederlassung {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "gssn", length: 6 })
  gssn: string;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @OneToMany(
    () => Standort,
    standort => standort.niederlassung
  )
  standorts: Standort[];
}
