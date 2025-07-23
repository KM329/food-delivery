import { Injectable, SkipSelf } from '@angular/core';
import { Item } from '../model/Item.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address } from '../model/Address.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  foodItems$ = new BehaviorSubject<Item[]>([]);
  address!: Address;
  private apiUrl = 'http://localhost:3000';
  public search$ = new BehaviorSubject <any> ('');

  constructor(private httpClient: HttpClient) { }

  public setSearch(searchInput: string | null | undefined) {
    this.search$.next(searchInput);
  }

  getFoodLists():Promise<void>{
    return this.httpClient.get<Item[]>(`${this.apiUrl}/getFoodLists`).toPromise().then((response) => {
      return this.foodItems$.next(response ?? []);
    }).catch(err => {
      console.error('Failed to load food list', err);
      return Promise.resolve(); // Prevent app from blocking on error
    });;
  }

  setAddress(data: Address): void {
    this.address = data;
  }

  getTotal() {
    return this.foodItems$.getValue()
    .reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
