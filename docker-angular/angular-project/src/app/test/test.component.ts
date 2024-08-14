import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit, OnChanges, OnDestroy {
  @Input() parentData: string = '';

  // コンポーネントの初期化時に実行
  ngOnInit() {
    console.log('ngOnInitが呼ばれました');
  }
  
  // ビューの初期化が完了し、すべてのテンプレートの描画が終了した後に実行
  ngAfterViewInit() {
    console.log('ngAfterViewInitが呼ばれました');
  }
  
  // @Inputで入力値が設定されたときに実行
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChangesが呼ばれました');
    console.log('現在のvalue：', changes['parentData'].currentValue);
    console.log('以前のvalue：', changes['parentData'].previousValue);
  }

  // コンポーネントが破棄されるときに実行
  ngOnDestroy() {
    console.log('OnDestroyが呼ばれました');
  }

}
