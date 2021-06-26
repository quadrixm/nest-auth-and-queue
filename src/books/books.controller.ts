import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'app/auth/jwt-auth.guard';
import { BooksService } from 'app/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('read')
  readCsvFile() {
    return this.booksService.addBookCSVReadJob();
  }

  @Get('job/:id')
  getJobById(@Param() params: { id: number }) {
    return this.booksService.getBookCSVReadJob(params.id);
  }
}
