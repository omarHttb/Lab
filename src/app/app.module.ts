import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';  
import { AuthenticationInterceptor } from './Interceptors/authentication.interceptor';
import { EmployeeComponent } from './employee/employee.component';
import { LabInformationComponent } from './lab-information/lab-information.component';
import { LabOrdersComponent } from './lab-orders/lab-orders.component';
import { NationalitesComponent } from './nationalites/nationalites.component';
import { PatientsComponent } from './patients/patients.component';
import { PositionsComponent } from './positions/positions.component';
import { TestNamesComponent } from './test-names/test-names.component';
import { WorkTypeComponent } from './work-type/work-type.component';
import { NewDepartmentComponent } from './new-department/new-department.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreateAccountComponent,
    LoginComponent,
    EmployeeComponent,
    LabInformationComponent,
    LabOrdersComponent,
    NationalitesComponent,
    PatientsComponent,
    PositionsComponent,
    TestNamesComponent,
    WorkTypeComponent,
    NewDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
