import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sum',
  template: `<h1>Sum is = {{a+b}}</h1>`,
  styles: [],
})
export class SumComponent {
  @Input() a: number;
  @Input() b: number;
}
