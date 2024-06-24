import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {path:'',component:LoginComponent} ,
  {path:'home',component:HomeComponent,children:[
    {path: 'CreateAccount',component:CreateAccountComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//
// {path:'',component:LoginComponent} ,
// {path:'Home',component:HomeComponent,children:[
//   {path:'CreateAccount',component:CreateAccountComponent}

//old
// {path: 'CreateAccount',component:CreateAccountComponent},
// {path:'Login',component:LoginComponent} 