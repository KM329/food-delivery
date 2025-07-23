import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Address } from '../model/Address.model';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.less']
})
export class AddressEntryComponent {
  addressForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    addressOne: ['', Validators.required],
    addressTwo: ['',],
    city: ['', Validators.required],
    zipcode: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, 
    private order: OrderService, 
    private router: Router) {}

  ngOnInit(): void {
    this.addressForm.patchValue(this.order.address); // Pre-populate form on back
  }

  public proceed(): void {
    this.addressForm.markAllAsTouched();
    if(this.addressForm.valid) {
      this.order.setAddress(this.addressForm.value as Address);
      this.router.navigate(['/dashboard/summary']);
    }
  }

}
