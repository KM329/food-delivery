import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AddressEntryComponent } from './address-entry/address-entry.component';
import { SummaryComponent } from './summary/summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '../core/interceptors/api.interceptor';


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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
   
  ]
})
export class DashboardModule { }
