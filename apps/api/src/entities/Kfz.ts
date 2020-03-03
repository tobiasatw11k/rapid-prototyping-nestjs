import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Reperatur } from "./Reperatur";

@Index("PK__kfz__3213E83F3CA03296", ["id"], { unique: true })
@Entity("kfz", { schema: "dbo" })
export class Kfz {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "regno", nullable: true, length: 10 })
  regno: string | null;

  @Column("varchar", { name: "besitzer", nullable: true, length: 100 })
  besitzer: string | null;

  @OneToMany(
    () => Reperatur,
    reperatur => reperatur.kfz
  )
  reperaturs: Reperatur[];
}
