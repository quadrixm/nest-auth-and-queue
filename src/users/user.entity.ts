import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  username: string;

  @Column({ nullable: true })
  password?: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  mobile?: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  status?: string;
}
