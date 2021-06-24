import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'app/auth/jwt-auth.guard';
import { BooksService } from 'app/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Get('read')
  readCsvFile() {
    return this.booksService.addBookCSVReadJob();
  }
}
