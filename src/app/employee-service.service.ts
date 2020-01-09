import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  employeeList=[{
    ID: 1,
    "Name": "Eurasian Collared-Dove",
    "ContactNo": "7894561230",
    "Designation": "Streptopelia",
    "Salary": "20000",
    "Action": ""
},
{
    ID: 2,
    "Name": "Bald Eagle",
    "ContactNo": "9874562130",
    "Designation": "Haliaeetus leucocephalus",
    "Salary": "46467",
    "Action": ""
},
{
    ID: 3,
    "Name": "Eurasian Collared-Dove",
    "ContactNo": "8527419363",
    "Designation": "Streptopelia",
    "Salary": "30000",
    "Action": ""
},

]

  getEmployeeList(){
    return this.employeeList;
  }

  updateEmployee(){

  }
}
