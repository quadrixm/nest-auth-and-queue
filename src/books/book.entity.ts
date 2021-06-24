import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  bookName?: string;

  @Column()
  author: string;

  @Column()
  createdAt: string;

  @Column()
  publishedAt: string;
}
