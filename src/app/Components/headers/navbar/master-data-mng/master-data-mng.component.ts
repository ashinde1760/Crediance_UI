import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CredenceServiceService } from 'src/app/credence-service.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-master-data-mng',
  templateUrl: './master-data-mng.component.html',
  styleUrls: ['./master-data-mng.component.css'],
})
export class MasterDataMngComponent implements OnInit {
  projects: any = [];
  selectedProject!: string;
  docUploadSection = false;
  uploadDialog = false;
  items!: MenuItem[];
  items1!: MenuItem[];
  activeItem!: MenuItem;

  constructor(private service: CredenceServiceService) {}

  ngOnInit(): void {
    this.service.getProjects().subscribe(
      (data: any) => {
        this.projects = data;
        console.log(this.projects);
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );

    this.items = [
      { label: 'Document Upload' },
      { label: 'Mapping' },
      { label: 'Preview' },
    ];


    this.items1 = [
      {label: 'Data Upload', icon: 'pi pi-fw pi-upload',routerLink: ['/mastermng', 'uploadDocument']},
      {label: 'Tracking Sheet', icon: 'pi pi-fw pi-document',routerLink: ['/mastermng', 'viewTS']},
      {label: 'Offer Letter', icon: 'pi pi-fw pi-document',routerLink: ['/mastermng', 'viewOL']},
      {label: 'Bank Statement', icon: 'pi pi-fw pi-document',routerLink: ['/mastermng', 'viewBS']},
      {label: 'Salary Slip', icon: 'pi pi-fw pi-document',routerLink: ['/mastermng', 'viewSS']},
  ];

  this.activeItem = this.items[0];
  }


  onClickTab(items1:any){
    console.log(items1);
    
  }


  selectedClient() {
    this.docUploadSection = true;
  }

  onUploadTrackingSheet() {
    this.uploadDialog = true;
  }

  onUploadOfferLetter() {}

  onUploadBankStatement() {}

  onUploadSalarySlip() {}

  selectFile(event: any) {}

  uploadFile() {}
}
