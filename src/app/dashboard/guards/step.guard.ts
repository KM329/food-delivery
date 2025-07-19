import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Injectable({
  providedIn: 'root'
})
export class StepGuard implements CanActivate {
  constructor(private order: OrderService, private router: Router) {}
 canActivate(route: ActivatedRouteSnapshot): boolean {
    const url = route.routeConfig?.path;

    if (url === 'address' && this.order.items.length === 0) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    if (url === 'summary' && (!this.order.address?.name || !this.order.address?.street)) {
      this.router.navigate(['/dashboard/address']);
      return false;
    }

    return true;
  }
  
}
