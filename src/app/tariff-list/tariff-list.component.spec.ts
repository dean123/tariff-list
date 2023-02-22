import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffListItemComponent } from '../list-item/tariff-list-item.component';
import { TariffListComponent } from './tariff-list.component';

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffListComponent, TariffListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
