import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Patient } from '../model/Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  baseUrl=''
  constructor(private httpClient:HttpClient) {  
    this.baseUrl=environment.apiUrl
   }

   Insert(Patient:Patient):Observable<any>
   {
    return this.httpClient.post(this.baseUrl + "/api/Patients/Insert",Patient)
   }
}
