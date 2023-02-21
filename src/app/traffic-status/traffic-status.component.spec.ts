import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficStatusComponent } from './traffic-status.component';

describe('TrafficStatusComponent', () => {
  let component: TrafficStatusComponent;
  let fixture: ComponentFixture<TrafficStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
