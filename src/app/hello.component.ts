import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit, OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log('On Destroy call');
  }
  @Input() name: string;
  @Input() lastName: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Change call', changes);
  }
  ngOnInit(): void {
    console.log('On Init call');
  }
}
