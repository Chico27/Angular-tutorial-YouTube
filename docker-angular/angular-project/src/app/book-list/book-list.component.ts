import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';

type Book = {
  id: number;
  name: string;
  author: string;
  price: number;
};

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent implements OnInit {

  books: Book[] = []

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this.books = this._bookService.getBooks();    
  }

}
