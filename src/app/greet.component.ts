import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  template: `<h1>Hello {{firstName}} {{lastName}}</h1>`,
  styles: [],
})
export class GreetComponent {
  @Input()
  firstName: string;
  @Input()
  lastName: string;
  
}
