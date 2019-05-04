import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModelComponent } from './search-model.component';

describe('SearchModelComponent', () => {
  let component: SearchModelComponent;
  let fixture: ComponentFixture<SearchModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchModelComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
