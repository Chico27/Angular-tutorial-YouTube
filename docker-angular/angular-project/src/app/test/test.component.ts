import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  testMessage: string = '';

  handleClick(): void {
    console.log('ボタンがクリックされました')
  }
  outptLog(value: string): void {
    console.log(value)
  }
  onAnyKeydown(value: string): void {
    console.log(value, 'が入力されました')
  }
}
