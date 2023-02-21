import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-status',
  templateUrl: './traffic-status.component.html',
  styleUrls: ['./traffic-status.component.scss']
})
export class TrafficStatusComponent {
  @Input() type!: string;
  @Input() speed!: number;
}
