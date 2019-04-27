import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursPage } from './tours.page';

describe('ToursPage', () => {
  let component: ToursPage;
  let fixture: ComponentFixture<ToursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
