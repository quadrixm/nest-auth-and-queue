import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'app/books/book.entity';
import { Repository } from 'typeorm';

@Processor('book')
export class BookConsumer {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  @Process()
  async transcode(job: Job<any>) {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      await console.log(job.data);
      progress += 10;
      await job.progress(progress);
    }
    return {};
  }
}
