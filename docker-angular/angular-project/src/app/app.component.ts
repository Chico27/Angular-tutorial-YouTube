import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  message: string = '';
}
