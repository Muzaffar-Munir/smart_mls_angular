import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesBasicInfoComponent } from './properties-basic-info.component';

describe('PropertiesBasicInfoComponent', () => {
  let component: PropertiesBasicInfoComponent;
  let fixture: ComponentFixture<PropertiesBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
