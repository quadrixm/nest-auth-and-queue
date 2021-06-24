import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from 'app/books/books.service';
import { Book } from 'app/books/book.entity';
import { BullModule } from '@nestjs/bull';
import { BookConsumer } from 'app/books/book.consumer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    BullModule.registerQueue({
      name: 'book',
    }),
  ],
  providers: [BooksService, BookConsumer],
  controllers: [BooksController],
})
export class BooksModule {}
