import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from 'app/books/books.service';
import { Book } from 'app/books/book.entity';
import { BullModule } from '@nestjs/bull';
import { AuthModule } from 'app/auth/auth.module';
import { BookProcessor } from 'app/books/book.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    BullModule.registerQueue({
      name: 'book',
    }),
    AuthModule,
  ],
  providers: [BooksService, BookProcessor],
  controllers: [BooksController],
})
export class BooksModule {}
