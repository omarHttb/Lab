import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Signup } from '../model/Signup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Signin } from '../model/Signin';



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl=''
  constructor(private httpClient:HttpClient) {  
    this.baseUrl=environment.apiUrl
   }

   createAccount(user:Signup):Observable<any>
   {
     return this.httpClient.post(this.baseUrl +"/api/Accounts/Signup",user)
   }

   Login(user:Signin):Observable<any>{
    return this.httpClient.post(this.baseUrl+'/api/Accounts/Login',user)
   }
}
