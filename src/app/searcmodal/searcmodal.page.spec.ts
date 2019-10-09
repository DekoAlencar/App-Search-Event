import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcmodalPage } from './searcmodal.page';

describe('SearcmodalPage', () => {
  let component: SearcmodalPage;
  let fixture: ComponentFixture<SearcmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
