import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Job, Queue } from 'bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'app/books/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectQueue('book') private bookQueue: Queue,
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  async addBookCSVReadJob(): Promise<Job> {
    return this.bookQueue.add('read-csv', {
      foo: 'bar',
    });
  }

  async getBookCSVReadJob(jobName: string): Promise<Job> {
    return this.bookQueue.getJob('read-csv');
  }
}
