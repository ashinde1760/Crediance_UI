import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { CredenceServiceService } from 'src/app/credence-service.service';
import { Client } from './model/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clientDialog:boolean=false;
  clientEditDialog:boolean=false;
  clientData!:Client;
  clientEditData!:Client;
  clientAllData:Client[]=[];

  constructor(private router: Router, private service:CredenceServiceService) {}

  ngOnInit(): void {
    this.clientData={};

    this.service.getClient().subscribe(
      (data:any)=>{
        this.clientAllData=data;
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
        
      }
    )

  }

  onClickAdd(){
    this.clientDialog=true;
  }

  onClickEdit(id:string){
    this.clientEditDialog=true;
    this.service.getClientById(id).subscribe(
      (data:Client)=>{
        this.clientEditData=data;
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
        
      }
    )
  }

  onClickCancle()
  {
    this.clientDialog=false;
    this.clientEditDialog=false;
  }

  onClickSave(){
    this.service.addClient(this.clientData).subscribe(
      (data:Client)=>{
        this.clientDialog=false;
        console.log(data);
        this.ngOnInit();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
        
      }
    )
  }
}
