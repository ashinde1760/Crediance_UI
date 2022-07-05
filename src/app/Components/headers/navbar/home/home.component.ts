import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredenceServiceService } from 'src/app/credence-service.service';
import { Client } from './model/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projectCreationDialog: boolean = false;
  projectEditDialog:boolean=false;
  clientData!:Client;
  clientData1!:Client;
  clientDatas:Client[]=[];

  value1:number=100;
  value2:number=70;
  value3:number=30;

  constructor(private router: Router, private service:CredenceServiceService) {}

  ngOnInit(): void {
    this.service.getProjects().subscribe(
      (data:any)=>{
        this.clientDatas=data;
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }

  onClickAddProject() {
    this.clientData={};
    this.projectCreationDialog=true;
  }

  onClickCancle()
  {
    this.projectCreationDialog=false;
    this.projectEditDialog=false;
  }

  onClickSave()
  {
    this.service.addProject(this.clientData).subscribe(
      (data:Client)=>{
        console.log(data);
        this.projectCreationDialog=false;
        this.ngOnInit();
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }

  onCLickEdit(id:string)
  {
    this.clientData1={};
    this.service.getProjectById(id).subscribe(
      (data:Client)=>{
        this.clientData1=data;
        this.projectEditDialog=true;
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }

  onClickUpdate()
  {
    this.service.editProjectById(this.clientData1).subscribe(
      (data:Client)=>{
        console.log("Client data updated successfully", data);
        this.projectEditDialog=false;
        this.ngOnInit();
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }
}
