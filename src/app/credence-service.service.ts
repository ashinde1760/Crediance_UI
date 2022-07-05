import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from './Components/headers/navbar/home/model/client';

@Injectable({
  providedIn: 'root'
})
export class CredenceServiceService {

  constructor(private http:HttpClient) { }

  addProject(clientData:Client)
  {
    return this.http.post(`${environment.url}/client`,clientData)
  }

  getProjects()
  {
    return this.http.get(`${environment.url}/client`)
  }
}
