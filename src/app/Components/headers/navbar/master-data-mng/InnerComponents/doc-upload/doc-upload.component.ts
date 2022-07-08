import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectTrackingSheet(event: any) {}
  selectOfferLetter(event: any) {}
  selectBankStatement(event: any) {}
  selectSalarySlip(event: any) {}

  uploadFile() {}
}
