import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponents } from './view.component';

describe('ViewComponents', () => {
  let component: ViewComponents;
  let fixture: ComponentFixture<ViewComponents>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
