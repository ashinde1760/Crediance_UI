import { Component, OnInit } from '@angular/core';
import { Parameter } from '../../model/parameter';

@Component({
  selector: 'app-view-salary-slip',
  templateUrl: './view-salary-slip.component.html',
  styleUrls: ['./view-salary-slip.component.css']
})
export class ViewSalarySlipComponent implements OnInit {

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
