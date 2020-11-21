import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesCharacteristicsComponent } from './properties-characteristics.component';

describe('PropertiesCharacteristicsComponent', () => {
  let component: PropertiesCharacteristicsComponent;
  let fixture: ComponentFixture<PropertiesCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
