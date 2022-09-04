import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateConstractComponent } from './create-constract/create-constract.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateConstractComponent,
    CreateCustomerComponent,
    CreateServiceComponent,
    EditCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
