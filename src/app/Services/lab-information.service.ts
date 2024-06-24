import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LabInformation } from '../model/LabInformation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabInformationService {

  baseUrl=''
  constructor(private httpClient:HttpClient) {  
    this.baseUrl=environment.apiUrl
   }

   Insert(LabInformation:LabInformation):Observable<any>
   {
    return this.httpClient.post(this.baseUrl + "/api/LabInformation/Insert",LabInformation)
   }
}
