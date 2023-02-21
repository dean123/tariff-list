import { Injectable } from '@angular/core';

import mockTariffs from 'src/data/mock-tariffs';
import { Tariff } from './tariff';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor() { }

  getTariffs(): Tariff[] {
    return mockTariffs;
  }
}
