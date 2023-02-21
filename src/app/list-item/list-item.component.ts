import { Component, Input } from '@angular/core';
import { Tariff } from '../tariff';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() tariff!: Tariff;

}
