import { Component, Input } from '@angular/core';
import { Tariff } from '../tariff';

@Component({
  selector: 'app-list-item',
  templateUrl: './tariff-list-item.component.html',
  styleUrls: ['./tariff-list-item.component.scss']
})
export class TariffListItemComponent {
  @Input() tariff!: Tariff;

}
