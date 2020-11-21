import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesFeaturesComponent } from './properties-features.component';

describe('PropertiesFeaturesComponent', () => {
  let component: PropertiesFeaturesComponent;
  let fixture: ComponentFixture<PropertiesFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
