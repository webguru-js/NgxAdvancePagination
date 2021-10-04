import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAdvancePaginationModule } from 'ngx-advance-pagination';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAdvancePaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
