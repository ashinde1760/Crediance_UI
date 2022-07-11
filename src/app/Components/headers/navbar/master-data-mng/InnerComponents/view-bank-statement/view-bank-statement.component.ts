import { Component, OnInit } from '@angular/core';
import { Parameter } from '../../model/parameter';

@Component({
  selector: 'app-view-bank-statement',
  templateUrl: './view-bank-statement.component.html',
  styleUrls: ['./view-bank-statement.component.css']
})
export class ViewBankStatementComponent implements OnInit {

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
