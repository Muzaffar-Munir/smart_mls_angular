import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsContactComponent } from './agents-contact.component';

describe('AgentsContactComponent', () => {
  let component: AgentsContactComponent;
  let fixture: ComponentFixture<AgentsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
