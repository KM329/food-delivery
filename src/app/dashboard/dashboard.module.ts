import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AddressEntryComponent } from './address-entry/address-entry.component';
import { SummaryComponent } from './summary/summary.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    FoodListComponent,
    AddressEntryComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
