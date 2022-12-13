import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GreetComponent } from './greet.component';
import { SumComponent } from './sum.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, GreetComponent,SumComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
