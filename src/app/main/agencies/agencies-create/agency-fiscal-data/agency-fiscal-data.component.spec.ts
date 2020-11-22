import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyFiscalDataComponent } from './agency-fiscal-data.component';

describe('AgencyFiscalDataComponent', () => {
  let component: AgencyFiscalDataComponent;
  let fixture: ComponentFixture<AgencyFiscalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyFiscalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyFiscalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
