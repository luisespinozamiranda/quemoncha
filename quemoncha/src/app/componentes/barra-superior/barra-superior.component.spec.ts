import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSuperiorComponent } from './barra-superior.component';

describe('BarraSuperiorComponent', () => {
  let component: BarraSuperiorComponent;
  let fixture: ComponentFixture<BarraSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraSuperiorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
