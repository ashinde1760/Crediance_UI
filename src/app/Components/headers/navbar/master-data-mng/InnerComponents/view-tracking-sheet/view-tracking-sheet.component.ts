import { Component, OnInit } from '@angular/core';
import { Parameter } from '../../model/parameter';

@Component({
  selector: 'app-view-tracking-sheet',
  templateUrl: './view-tracking-sheet.component.html',
  styleUrls: ['./view-tracking-sheet.component.css']
})
export class ViewTrackingSheetComponent implements OnInit {
  parameters:Parameter[]=[];

  constructor() { 
    this.parameters=[
      {parameter:"Name of Candidate"},
      {parameter:"Bank Account Number"},
      {parameter:"Bank Name"},
      {parameter:"Name of Organization"},
      {parameter:"Joining Date"},
      {parameter:"Place of Employement"},
      {parameter:"Gross Salary"},
      {parameter:"Net Salary"},
      {parameter:"Total Diduction"},
    ]

  }

  ngOnInit(): void {
  }

}
