import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  username: string;

  @Column()
  password?: string;

  @Column()
  name?: string;

  @Column()
  address?: string;

  @Column()
  mobile?: string;

  @Column()
  email?: string;

  @Column()
  status?: string;
}
