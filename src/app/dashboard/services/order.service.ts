import { Injectable } from '@angular/core';
import { Item } from '../model/Item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 items: Item[] = [];
 address: { 
  name: string; 
  street: string; 
  city: string } = { name: '', street: '', city: '' };

  addItem(item: Item) {
    this.items.push(item);
  }

  setAddress(data: any) {
    this.address = data;
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price*item.quantity), 0);
  }

  constructor() { }
}
