import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddressEntryComponent } from './address-entry/address-entry.component';
import { SummaryComponent } from './summary/summary.component';
import { StepGuard } from './guards/step.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'address', component: AddressEntryComponent, canActivate: [StepGuard] },
  { path: 'summary', component: SummaryComponent, canActivate: [StepGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
