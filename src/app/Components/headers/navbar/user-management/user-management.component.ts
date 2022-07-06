import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CredenceServiceService } from 'src/app/credence-service.service';
import { Clients, Role, User } from './model/user';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class UserManagementComponent implements OnInit {

  addUserDialog:boolean=false;
  editUserDialog:boolean=false;
  uploadDialog:boolean=false;
  userData!:User;
  userData1!:User;
  userDatas:User[]=[];
  clients:Clients[]=[];
  roles:Role[]=[];
  selectedFiles?: FileList;


  constructor(private service:CredenceServiceService,private messageService: MessageService,private confirmationService: ConfirmationService) { 
    this.roles=[
      {role:"Admin"},
      {role:"Super Admin"},
      {role:"PIA"}
    ]
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (data:any)=>{
        this.userDatas=data;
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )

    this.service.getProjects().subscribe(
      (data:any)=>{
        this.clients=data;
        console.log(this.clients,"client list");
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }

  addUser(){
    this.userData={};
    this.addUserDialog=true;
  }

  onClickCancle()
  {
    this.addUserDialog=false;
    this.editUserDialog=false;
  }

  onClickSave(){
    this.service.addUser(this.userData).subscribe(
      (data:User)=>{
        console.log("user added successfully");
        this.addUserDialog=false;
        this.ngOnInit();
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }

  editUser(id:string){
    this.service.getUserById(id).subscribe(
      (data:User)=>{
        this.userData1=data;
        this.editUserDialog=true;
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }

  deleteUser(id:string){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete User?',
      accept: () => {
        this.service.deleteUser(id).subscribe(
          (data:User)=>{
            this.messageService.add({
              severity: 'success',
              summary: 'Deleted',
              detail: 'user deleted successfully',
            });
            this.ngOnInit();
          },
          (error:HttpErrorResponse)=>{
            alert(error);
          }
        )
      },
      reject:()=>{
        this.messageService.add({
          severity: 'warn',
          summary: 'Cancelled',
          detail: 'user not deleted',
        });
      }
  });
    
  }

  onClickUpdate()
  {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to edit this user?',
      accept: () => {
        this.service.editUserById(this.userData1).subscribe(
          (data:User)=>{
            console.log("User updated successfully");
            this.editUserDialog=false;
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'user updated Successfully',
            });
            this.ngOnInit();
          },
          (error:HttpErrorResponse)=>{
            this.messageService.add({
              severity: 'cancle',
              summary: 'Cancelled',
              detail: `${error}`,
            });
          }
        )
      },
      reject:()=>{
        this.messageService.add({
          severity: 'warn',
          summary: 'Cancelled',
          detail: 'user not updated',
        });
      }
  });
    
  }

  onClickUpload()
  {
    this.uploadDialog=true;
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  uploadFile(){
    alert("file uploaded successfully");
    this.uploadDialog=false;
  }
}
