import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BadgePageComponent } from './badge-page/badge-page.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BadgePageComponent, BadgeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
