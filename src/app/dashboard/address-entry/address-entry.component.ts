import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.less']
})
export class AddressEntryComponent {
  addressForm = this.fb.group({
    name: [''],
    street: [''],
    city: ['']
  });

  constructor(private fb: FormBuilder, 
    private order: OrderService, 
    private router: Router) {}

  ngOnInit(): void {
    this.addressForm.patchValue(this.order.address); // Pre-populate form on back
  }

  proceed() {
    this.order.setAddress(this.addressForm.value);
    this.router.navigate(['/dashboard/summary']);
  }

}
