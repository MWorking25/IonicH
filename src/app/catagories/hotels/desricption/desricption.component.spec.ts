import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesricptionComponent } from './desricption.component';

describe('DesricptionComponent', () => {
  let component: DesricptionComponent;
  let fixture: ComponentFixture<DesricptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesricptionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesricptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
