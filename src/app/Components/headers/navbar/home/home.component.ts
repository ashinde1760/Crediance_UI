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
  clientData!:Client;
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
    alert("edit")
  }
}
