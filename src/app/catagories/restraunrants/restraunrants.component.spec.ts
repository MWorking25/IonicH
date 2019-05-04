import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestraunrantsComponent } from './restraunrants.component';

describe('RestraunrantsComponent', () => {
  let component: RestraunrantsComponent;
  let fixture: ComponentFixture<RestraunrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestraunrantsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestraunrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
