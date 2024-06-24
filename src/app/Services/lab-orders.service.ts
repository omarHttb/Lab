import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { LabOrders } from '../model/LabOrders';

@Injectable({
  providedIn: 'root'
})
export class LabOrdersService {

  baseUrl=''
  constructor(private httpClient:HttpClient) {  
    this.baseUrl=environment.apiUrl
   }
   
   Insert(LabOrders:LabOrders):Observable<any>
   {
    return this.httpClient.post(this.baseUrl + "/api/LabOrders/Insert",LabOrders)
   }
  
  }
