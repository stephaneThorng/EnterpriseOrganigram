import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { AlertModule } from './alert/alert.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EmployeeModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
