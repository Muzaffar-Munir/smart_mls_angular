import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSalesComponent } from './properties-sales.component';

describe('PropertiesSalesComponent', () => {
  let component: PropertiesSalesComponent;
  let fixture: ComponentFixture<PropertiesSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
