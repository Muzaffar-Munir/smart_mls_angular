import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyContactComponent } from './agency-contact.component';

describe('AgencyContactComponent', () => {
  let component: AgencyContactComponent;
  let fixture: ComponentFixture<AgencyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
