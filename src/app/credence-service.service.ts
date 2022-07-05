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

  getProjectById(id:string)
  {
    return this.http.get(`${environment.url}/client/${id}`);
  }

  editProjectById(clientData:Client)
  {
    return this.http.put(`${environment.url}/client/${clientData.id}`,clientData)
  }





  addUser(userData:Client)
  {
    return this.http.post(`${environment.url}/user`,userData)
  }

  getUsers()
  {
    return this.http.get(`${environment.url}/user`)
  }

  getUserById(id:string)
  {
    return this.http.get(`${environment.url}/user/${id}`);
  }

  editUserById(userData:Client)
  {
    return this.http.put(`${environment.url}/user/${userData.id}`,userData)
  }

  deleteUser(id:string){
    return this.http.delete(`${environment.url}/user/${id}`)
  }


}
