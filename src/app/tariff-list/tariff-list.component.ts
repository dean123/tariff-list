import { Component } from '@angular/core';
import { Tariff } from '../tariff';
import { TariffService } from '../tariff.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent {
  tariffs: Tariff[] = [];

  constructor(private tariffService: TariffService) {}

  getTariffs(): void {
    this.tariffs = this.tariffService.getTariffs();
  }

  ngOnInit(): void {
    this.getTariffs();
  }
}
