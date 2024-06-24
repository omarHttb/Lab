import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Nationalities } from '../model/Nationalites';

@Injectable({
  providedIn: 'root'
})
export class NationalitiesService {

  baseUrl=''
  constructor(private httpClient:HttpClient) {  
    this.baseUrl=environment.apiUrl
   }

   Insert(Nationalities:Nationalities):Observable<any>
   {
    return this.httpClient.post(this.baseUrl + "/api/Nationalites/Insert",Nationalities)
   }
  
}
