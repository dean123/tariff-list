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

  async getTariffs(sortBy: string | null): Promise<void> {
    this.tariffs = await this.tariffService.getTariffs(sortBy);
  }

  ngOnInit(): void {
    this.getTariffs(null);
  }

  onSortChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.getTariffs(target.value);
  }
}
