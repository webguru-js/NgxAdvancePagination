import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdvancePaginationComponent } from './ngx-advance-pagination.component';

describe('NgxAdvancePaginationComponent', () => {
  let component: NgxAdvancePaginationComponent;
  let fixture: ComponentFixture<NgxAdvancePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAdvancePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdvancePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
