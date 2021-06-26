import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'app/books/book.entity';
import { Repository } from 'typeorm';

@Processor('book')
export class BookProcessor {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  @Process()
  async readCsv(job: Job) {
    const data = [];
    try {
      const results: any[] = await new Promise((resolve, reject) => {
        fs.createReadStream('absolute path to data.csv file')
          .on('error', (error) => {
            reject(error);
          })
          .pipe(csv())
          .on('data', (row) => {
            data.push(row);
          })
          .on('end', () => {
            resolve(data);
          });
      });
      let progress = 0;
      const totalCount = results.length;
      for (const result of results) {
        const book: Book = { bookName: result.Area, author: result.year };
        await this.booksRepository.save(book);
        progress += 1;
        await job.progress(Math.round((progress / totalCount) * 100));
      }
    } catch (e) {
      console.log({ e });
    }
    return {};
  }
}
