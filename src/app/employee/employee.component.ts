import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeDetails=[];
  textSerch: any;
  values: '';

  constructor(private httpService: HttpClient) { }
  searchValue;
  ngOnInit() {
  
    this.httpService.get('./assets/employeeDetails.json').subscribe(
      data => {
        this.employeeDetails = data as String[];
        console.log( this.employeeDetails);
        
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      })
  }

  onkeypress(event:any)
  {
this.values = event.target.value;
this.employeeDetails = this.employeeDetails.filter(element => element.Name.slice(0,this.values.length)===this.values);
        console.log(this.employeeDetails);    
  }
  
  onkeyPress(event:any){
    this.values = event.target.value;
this.employeeDetails = this.employeeDetails.filter(element => element.ContactNo.slice(0,this.values.length)===this.values);
        console.log(this.employeeDetails); 
  }
}
