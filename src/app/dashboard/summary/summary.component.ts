import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent {
  items = this.order.items;
  address = this.order.address;
  total = this.order.getTotal();

  constructor(private order: OrderService) {}

}
