import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute,Params } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  // employeeAdd:FormGroup = new FormGroup({
  //   name:new FormControl(''),
  //   ContactNo: new FormControl(''),
  //   Designation: new FormControl(''),
  //   Salary: new FormControl(''),
  //     })
  employeeDetails;
  name: any;
  empId: any;
  employee : {ID: number,
  Name:string,
  ContactNo:string,
  Designation:string,
  Salary:string,
};

  constructor( private empService: EmployeeServiceService,private route: ActivatedRoute) { }

   id:number;
  ngOnInit() {
    this.route.params.subscribe( (params:Params) =>
      {
      this.id = +params['Id'];
      console.log(this.id);
      }
  );
this. getEmployeeDetails(this.id);
  }



  getEmployeeDetails(id){
   this.employeeDetails= this.empService.getEmployeeList();
  this.employee = this.employeeDetails.find(element => element.ID === id);
console.log( this.employee );
    }
}










  // addnewEmployee(){
 
  //   this.httpService.post('./assets/employeeDetails.json',this.employeeAdd.value).subscribe(res =>{
  //     this.employee = res;
  //     console.log(this.employee);
      
  //   })
  // }

  // getEmployeeDetails(){
  //   this.service.get('./assets/employeeDetails.json').subscribe(
  //     data => {
  //       this.employeeDetails = data as String[];
  //       console.log( this.employeeDetails);

        //  this.employeeDetails.array.forEach(element => {
        //   this.name = element.name
        //   console.log(this.name );
        // });
        
        
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log(err.message);
  //     })
  // }
