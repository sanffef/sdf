import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Poll {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  answer1: string;

  @Column()
  answer2: string;
}

