import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
id:number;
  ngOnInit() {
    // debugger
    this.route.queryParams.subscribe(para => {
       this.id = para['id'];
      console.log(this.id);
      
  });
  }
}
