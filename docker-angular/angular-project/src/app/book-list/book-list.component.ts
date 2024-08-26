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

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this._bookService.getBooks().subscribe(data => this.books = data);
  }

}
