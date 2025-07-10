import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from "typeorm";

@Entity("transactions")
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, length: 64, nullable: true })
  hash?: string;

  @Column({ type: "bigint", nullable: true })
  @Index()
  blocknumber?: number;

  @Column({ length: 42, nullable: true })
  @Index()
  fromaddress?: string;

  @Column({ type: "varchar", length: 42, nullable: true })
  @Index()
  toaddress?: string;

  @Column({ type: "decimal", precision: 28, scale: 0, nullable: true })
  value?: string;

  @Column({ type: "bigint", nullable: true })
  gasused?: number;

  @Column({ type: "decimal", precision: 28, scale: 0, nullable: true })
  gasprice?: string;

  @Column({ type: "bigint", nullable: true })
  gaslimit?: number;

  @Column({ type: "int", nullable: true })
  transactionIndex?: number;

  @Column({ type: "text", nullable: true })
  input?: string;

  @Column({ type: "bigint", nullable: true })
  @Index()
  timestamp?: number;

  @Column({ default: 1, nullable: true })
  status?: number;

  @CreateDateColumn()
  @Index()
  createdat!: Date;

  @UpdateDateColumn()
  updatedat!: Date;
}
