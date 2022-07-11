import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {
  selectedTrackingSheet?: FileList;
  selectedOfferLetter?: FileList;
  selectedBankStatement?: FileList;
  selectedSalarySlip?: FileList;

  constructor() { }

  ngOnInit(): void {
  }
  selectTrackingSheet(event: any) {
    this.selectedTrackingSheet = event.target.files;
  }
  selectOfferLetter(event: any) {
    this.selectedOfferLetter = event.target.files;
  }
  selectBankStatement(event: any) {
    this.selectedBankStatement = event.target.files;
  }
  selectSalarySlip(event: any) {
    this.selectedSalarySlip = event.target.files;
  }

  uploadFile() {}
}
