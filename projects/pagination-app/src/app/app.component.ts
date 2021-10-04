import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginationApp';

  constructor() {}

  pageNumberChangedFunc(evnt: any): void {
    console.log(evnt);
  }
}
