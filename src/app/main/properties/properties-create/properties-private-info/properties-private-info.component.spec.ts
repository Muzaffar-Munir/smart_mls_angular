import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPrivateInfoComponent } from './properties-private-info.component';

describe('PropertiesPrivateInfoComponent', () => {
  let component: PropertiesPrivateInfoComponent;
  let fixture: ComponentFixture<PropertiesPrivateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesPrivateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesPrivateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
