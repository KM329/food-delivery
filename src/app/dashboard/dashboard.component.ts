import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrderService } from './services/order.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  navForm = this.formBuilder.group({
    search: ('')
  })

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.navForm.get('search')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((searchInput)=> {
       this.orderService.setSearch(searchInput);
    });
  }

  public logout(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  public setSearch(): void {
    this.orderService.setSearch(this.navForm.get("search")?.value);
  }

}
