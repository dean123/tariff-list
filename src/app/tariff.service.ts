import { Injectable } from '@angular/core';

import mockTariffs from 'src/data/mock-tariffs';
import { Tariff } from './tariff';

@Injectable({
  providedIn: 'root'
})

export class TariffService {

  constructor() { }

  async getTariffs(sortBy: string | null): Promise<Tariff[]> {
    if (sortBy) {
      return mockTariffs.sort((a: Tariff, b: Tariff) => {
        if (sortBy == 'price') {
          return a.price - b.price;
        } else if (sortBy == 'download') {
          return b.downloadSpeed - a.downloadSpeed;
        } else {
          return b.uploadSpeed - a.uploadSpeed;
        }
      });
    } else {
      return mockTariffs;
    }
  }
}
