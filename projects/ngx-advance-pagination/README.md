# NgxAdvancePagination

An advance pagination for Angular2+ with dots facility.

## Installation

```sh
$ npm i ngx-advance-pagination --save
``` 

## Usage

```javascript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAdvancePaginationModule } from 'ngx-advance-pagination'; // <-- import the module
import { SampleComponent } from './sample.component';

@NgModule({
  declarations: [
     SampleComponent
  ],
  imports: [
    BrowserModule,
    NgxAdvancePaginationModule // <-- include it in your app module
  ],
  providers: [],
  bootstrap: [SampleComponent]
})
```

```html
// my.component.html
<NgxAdvancePagination
  [totalNumberOfData]="50"
  [dataPerPage]="3"
  [currentPageNumber]="1"
  [numberOfPagesToShow]="7"
  (pageNumberChanged)="pageNumberChanged($event)"
></NgxAdvancePagination>
```

```javascript
// my.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

  constructor() {}

  pageNumberChanged(currentPageNumber: number) {
    console.log(currentPageNumber);
  }
}
```

## Parameters
Key                     | Description
------------------------|------------
totalNumberOfData       | Total number of data
dataPerPage             | Number of data to render in a page
currentPageNumber       | Set current page number
numberOfPagesToShow     | Maximum number of pagers to show at a time

## Callbacks

pageNumberChanged(currentPageNumber).

## Compatibility

This pagination is compatible with Angular2 to [Angular12](https://github.com/angular/angular-cli) versions.

## License

Licensed under MIT. See [LICENSE](https://github.com/webguru-js/NgxAdvancePagination/blob/main/LICENSE) for more information.

## Issues

Report a bug in [ISSUES](https://github.com/webguru-js/NgxAdvancePagination/issues).
