import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  names: string[] = ['佐藤', '田中', '鈴木'];
  persons: { name: string, age: number }[] = [
    {
      name: '佐藤',
      age: 19
    },
    {
      name: '田中',
      age: 21
    },
    {
      name: '鈴木',
      age: 18
    },
  ];
}
