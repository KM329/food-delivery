import { Injectable, SkipSelf } from '@angular/core';
import { Item } from '../model/Item.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: Item[] = [];
  address: {
    name: string;
    street: string;
    city: string
  } = {
    name: '', street: '', city: ''
    };

  private apiUrl = 'http://localhost:3000';
  public search$ = new BehaviorSubject <any> ('');

  constructor(private httpClient: HttpClient) { }

  public setSearch(searchInput: string | null | undefined) {
    this.search$.next(searchInput);
  }

  getFoodLists(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/getFoodLists`);
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  setAddress(data: any) {
    this.address = data;
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

}
