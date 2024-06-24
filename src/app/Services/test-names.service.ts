import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { TestNames } from '../model/TestNames';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestNamesService {

  baseUrl=''
  constructor(private httpClient:HttpClient) {  
    this.baseUrl=environment.apiUrl
   }

   Insert(testNames:TestNames):Observable<any>
   {
    return this.httpClient.post(this.baseUrl + "/api/TestNames/Insert",testNames)
   }
}
