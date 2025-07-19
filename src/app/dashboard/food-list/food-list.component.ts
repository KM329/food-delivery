import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Item } from '../model/Item.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.less']
})
export class FoodListComponent {
   menu: Item[] = [
    { id: 1, name: 'Pizza', description: 'Cheesy delight pizza', price: 12, image: 'assets/pizza.png', quantity: 0 },
    { id: 2, name: 'Sushi', description: 'Fresh rolls', price: 20, image: 'assets/sushi.png', quantity: 0  },
    { id: 3, name: 'Burger', description: 'Burger Juicy classic', price: 10, image: 'assets/burger.png' , quantity: 0 },
    { id: 4, name: 'Noodles', description: 'Noodles', price: 10, image: 'assets/noodles.png' , quantity: 0 },
    { id: 5, name: 'Cake', description: 'Cake', price: 10, image: 'assets/cake.png' , quantity: 0 },
    { id: 6, name: 'Sandwich', description: 'Sandwich', price: 10, image: 'assets/sandwich.png' , quantity: 0 }
  ];

  constructor(private order: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.menu.forEach(item => {
      const cartItem = this.order.items.find(i => i.id === item.id);
      item.quantity = cartItem?.quantity ?? 0;
    });
  }

  next() {
    this.router.navigate(['/dashboard/address']);
  }

  addToCart(item: Item): void {
    if (!this.order.items.includes(item)) {
      this.order.items.push(item);
    }
  }

  increment(item: Item): void {
    item.quantity++;
    this.addToCart(item);
  }

  decrement(item: Item): void {
    if (item.quantity > 0) {
      item.quantity--;
      if (item.quantity === 0) {
        this.order.items = this.order.items.filter(i => i.id !== item.id);
      }
    }
  }

}
