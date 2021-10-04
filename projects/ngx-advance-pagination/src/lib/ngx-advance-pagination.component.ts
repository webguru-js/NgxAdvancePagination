import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'NgxAdvancePagination',
  templateUrl: './ngx-advance-pagination.component.html',
  styleUrls: ['./ngx-advance-pagination.component.scss']
})
export class NgxAdvancePaginationComponent implements OnInit {

  private _totalNumberOfData: number = 0;
  private _dataPerPage: number = 1;
  public _currentPageNumber: number = 1;
  private _totalNumberOfPaginationsToShow: number = 9;
  @Output() pageNumberChanged = new EventEmitter<any>();

  public paginationArr: any = [];
  public numOfPaginations: number = 0;

  constructor() {
  }

  @Input() set totalNumberOfData(val: number) {
    this._totalNumberOfData = val;
    this._paginationCalculations();
  }

  @Input() set dataPerPage(val: number) {
    this._dataPerPage = val;
    this._paginationCalculations();
  }

  @Input() set currentPageNumber(val: number) {
    this._currentPageNumber = val;
    this._paginationCalculations();
  }

  @Input() set numberOfPagesToShow(val: number) {
    this._totalNumberOfPaginationsToShow = val;
    this._paginationCalculations();
  }

  ngOnInit() {
  }

  private _paginationCalculations(): void {
    this.numOfPaginations = this._totalNumberOfData % this._dataPerPage == 0 ? this._totalNumberOfData / this._dataPerPage : parseInt((this._totalNumberOfData / this._dataPerPage).toString()) + 1;

    this.paginationArr = [];

    if(this.numOfPaginations <= this._totalNumberOfPaginationsToShow) {
      for(let i = 1; i<= this.numOfPaginations; i++) {
        this.paginationArr.push(i);
      }
    }
    else if(this._currentPageNumber <= (parseInt((this._totalNumberOfPaginationsToShow / 2).toString()))) {
      for(let i = 1; i<= this._totalNumberOfPaginationsToShow - 2; i++) {
        this.paginationArr.push(i);
      }
      this.paginationArr.push('...');
      this.paginationArr.push(this.numOfPaginations);
    }
    else if(this._currentPageNumber >= (this.numOfPaginations - parseInt((this._totalNumberOfPaginationsToShow / 2).toString()))) {
      this.paginationArr.push(1);
      this.paginationArr.push('...');
      for(let i = (this.numOfPaginations - this._totalNumberOfPaginationsToShow + 3); i <= this.numOfPaginations; i++) {
        this.paginationArr.push(i);
      }
    }
    else {
      let numberOfLoops = this._totalNumberOfPaginationsToShow - 4;
      let initCounter = numberOfLoops % 2 == 0 ? this._currentPageNumber - parseInt((numberOfLoops / 2).toString()) + 1 : this._currentPageNumber - parseInt((numberOfLoops / 2).toString());
      let endCounter = numberOfLoops % 2 != 0 ? this._currentPageNumber + parseInt((numberOfLoops / 2).toString()) : this._currentPageNumber + (numberOfLoops / 2);

      this.paginationArr.push(1);
      this.paginationArr.push('...');
      for(let i=initCounter; i<=endCounter; i++) {
        this.paginationArr.push(i);
      }
      this.paginationArr.push('...');
      this.paginationArr.push(this.numOfPaginations);
    }
  }

  paginationClicked(evnt: any, pageNum: number): void {
    evnt.preventDefault();
    if(isNaN(pageNum)) {
      return;
    }

    this._currentPageNumber = pageNum;
    this._paginationCalculations();
    this.pageNumberChanged.emit(pageNum);
  }

  prevClicked(): void {
    if(this._currentPageNumber == 1) {
      return;
    }

    this._currentPageNumber = this._currentPageNumber - 1;
    this._paginationCalculations();
    this.pageNumberChanged.emit(this._currentPageNumber);
  }

  nextClicked(): void {
    if(this._currentPageNumber == this.numOfPaginations) {
      return;
    }

    this._currentPageNumber = this._currentPageNumber + 1;
    this._paginationCalculations();
    this.pageNumberChanged.emit(this._currentPageNumber);
  }

}
