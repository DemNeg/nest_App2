/* eslint-disable prettier/prettier */

import { TimestampEntity } from 'src/Generics/timestamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cv')
export class CvEntity extends TimestampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    name: 'name',
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
  })
  firstname: string;

  @Column()
  age: number;

  @Column()
  cin: number;

  @Column()
  job: string;

  @Column()
  path: string;
}
