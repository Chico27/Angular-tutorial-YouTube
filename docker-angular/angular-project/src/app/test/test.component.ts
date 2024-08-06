import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  @Input() parentData: string = '';
  // @Input('parentData') test = '';
  @Output() childEvent = new EventEmitter();

  sendParendEvent() {
    this.childEvent.emit('ボタンが押されました');
  }
}
