import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsOtherDataComponent } from './agents-other-data.component';

describe('AgentsOtherDataComponent', () => {
  let component: AgentsOtherDataComponent;
  let fixture: ComponentFixture<AgentsOtherDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsOtherDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsOtherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
