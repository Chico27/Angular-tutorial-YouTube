import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  fontSize: string = '20px';
  sizeRem: number = 2;
  stylesString: string = 'font-size: 25px;color: blue;';
  stylesDict: object = {
    fontSize: '40px',
    color: 'red',
  };
  // stylesDict: object = {
  //   'font-size': '40px',
  //   'color': 'red',
  // };

  handleClick(): void {
    this.sizeRem = this.sizeRem * 2;
  }

}
