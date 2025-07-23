import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from './dashboard/services/order.service';

export function loadFoodFactory(orderService: OrderService) {
  return () => orderService.getFoodLists(); // 👈 return a Promise
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ {
      provide: APP_INITIALIZER,
      useFactory: loadFoodFactory,
      deps: [OrderService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
