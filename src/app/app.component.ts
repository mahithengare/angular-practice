import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isShow = true;
  clickme() {
    this.isShow=false;
    this.name = 'Hey Meena.';
  }
}
