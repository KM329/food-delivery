import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Address } from '../model/Address.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent {
  items = this.order.foodItems$.getValue().filter((item)=> item.quantity>0);
  address: Address = this.order.address;
  total = this.order.getTotal();

  constructor(private order: OrderService) {}

}
