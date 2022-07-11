import { Component, OnInit } from '@angular/core';
import { Parameter } from '../../model/parameter';

@Component({
  selector: 'app-view-offer-letter',
  templateUrl: './view-offer-letter.component.html',
  styleUrls: ['./view-offer-letter.component.css']
})
export class ViewOfferLetterComponent implements OnInit {

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
