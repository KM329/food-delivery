import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Item } from '../model/Item.model';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.less']
})
export class FoodListComponent {
   menu: Item[] = [];
   filteredMenu: Item[] = []; 

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.getFoodItemList();
    this.filteredMenu.forEach(item => {
      const cartItem = this.orderService.items.find(i => i.id === item.id);
      item.quantity = cartItem?.quantity ?? 0;
    });
   
    this.orderService.search$.subscribe((searchInput)=> {
      if(!searchInput) {
        this.filteredMenu = [...this.menu]
      } else {
        this.filteredMenu = this.menu.filter((item)=> 
        (item.name).includes(searchInput)
      )}
    });
  }

  private getFoodItemList(): void {
    this.orderService.getFoodLists().subscribe((resp: Item[])=> {
      this.menu = resp;
      this.filteredMenu = [...this.menu];
    })
  }

  public trackById(index: number, item: Item) {
    return item.id;
  }

  public next(): void {
    this.router.navigate(['/dashboard/address']);
  }

  addToCart(item: Item): void {
    if (!this.orderService.items.includes(item)) {
      this.orderService.items.push(item);
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
        this.orderService.items = this.orderService.items.filter(i => i.id !== item.id);
      }
    }
  }

}
