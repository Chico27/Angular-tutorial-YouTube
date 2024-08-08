import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'angular-project';
  num: number = 0.5;

  testObject: Object = {
    'a': 'test1',
    'b': 'test2',
    'c': 'test3',
  };

  upperTitle() {
    return this.title.toUpperCase();
  }

}
