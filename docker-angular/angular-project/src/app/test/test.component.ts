import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  successClass: string = "success";
  errorClass: string = "error";
  hasError: boolean = true;

  numericValue: string = "1";

  checkClasses: Object = {
    "success": this.isNumeric(this.numericValue),
    "error": !this.isNumeric(this.numericValue),
  } 
  checkClassesList: Object = [
    this.isNumeric(this.numericValue) ? "success" : "error",
    "underline"
  ] 

  isNumeric(value: string): boolean {
    // 正規表現を使って数値をチェックします。
    return !isNaN(Number(value)) && value.trim() !== '';
  }
}
