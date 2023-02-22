import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficStatusComponent } from '../traffic-status/traffic-status.component';
import { TariffListItemComponent } from './tariff-list-item.component';

describe('TariffListItemComponent', () => {
  let component: TariffListItemComponent;
  let fixture: ComponentFixture<TariffListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffListItemComponent, TrafficStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffListItemComponent);
    component = fixture.componentInstance;
    component.tariff = {
      id: 1,
      name: 'Tariff One',
      price: 55.65,
      uploadSpeed: 12,
      downloadSpeed: 24,
      benefits: [
        'Benefit 1',
      ],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
