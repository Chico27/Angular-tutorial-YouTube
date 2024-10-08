import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../models/books';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent implements OnInit {

  books: IBook[] = [];
  errorMessage: string = '';

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this._bookService.getBooks().subscribe({
      next: (data: IBook[]) => this.books = data,
      error: (err: Error) => this.errorMessage = err.message,
      // complete: () => console.log('Book fetching completed')
    });
  }
}
