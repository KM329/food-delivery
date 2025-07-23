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
  filteredMenu: Item[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.getFoodItemList();
    this.filterBySearch();
  }

  private filterBySearch(): void {
      this.orderService.search$.subscribe((searchInput) => {
      if (!searchInput) {
        this.filteredMenu = this.orderService.foodItems$.getValue();
      } else {
        //   this.filteredMenu = this.menu.filter((item)=> 
        //   (item.name).includes(searchInput)
        // )}
        // 🔁 Re-inject quantity into each filtered item
        this.filteredMenu = this.orderService.foodItems$.getValue()
          .filter(item => item.name.toLowerCase().includes(searchInput))
          // .map(item => ({
          //   ...item,
          //   quantity: this.orderService.getQuantity(item.id)
          // }))
      }
    });
  }

  private getFoodItemList(): void {
    this.orderService.foodItems$.subscribe((resp: Item[])=> {
    this.filteredMenu = resp
    });
  }

  public trackById(index: number, item: Item) {
    return item.id;
  }

  public next(): void {
    this.addToCart();
    this.router.navigate(['/dashboard/address']);
  }

  private addToCart(): void {
    this.orderService.foodItems$.next(this.filteredMenu);
  }

  public increment(item: Item): void {
    item.quantity++;
  }

  public decrement(item: Item): void {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

}