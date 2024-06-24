import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WorkType } from '../model/WorkType';

@Injectable({
  providedIn: 'root'
})
export class WorkTypeService {

  baseUrl=''
  constructor(private httpClient:HttpClient) {  
    this.baseUrl=environment.apiUrl
   }

   Insert(WorkType:WorkType):Observable<any>
   {
    return this.httpClient.post(this.baseUrl + "/api/WorkType/Insert",WorkType)
   }
}
