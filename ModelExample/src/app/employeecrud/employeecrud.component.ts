import { Component, OnInit } from '@angular/core';

import { Employee } from '../Model/employee';
@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emp:Employee[]=[
    {eid:1001,ename:"Sri",gender:"Male",salary:30000},
    {eid:1002,ename:"Raj",gender:"Male",salary:32000},
    {eid:1003,ename:"Sai",gender:"Male",salary:35000},
    {eid:1004,ename:"Mahesh",gender:"Male",salary:28000},
    {eid:1005,ename:"Priya",gender:"Female",salary:38000}

  ];

  //object creation of the type any
  //gettempinfo:any={};
  //Object of type Employee

  getempinfo:Employee={};
//Adding Employee details into emp array
  addEmployee()
  {
    debugger;
    this.emp.push(this.getempinfo);
    this.getempinfo={};
  }
  msg="Error";
  deleteEmployee(empid?:number)
  {
    debugger;
    for(let i=0;i<this.emp.length;i++)
    {
      if(this.emp[i].eid==empid)
      {
        this.emp.splice(i,1);
        this.msg="Record Deleted!!!";


      }
      else{
        this.msg="Record not Found";
      }
    }
  }

  EditEmployee(empid?:number)
  {
    for(let i=0;i<this.emp.length;i++)
    {
      if(this.emp[i].eid==empid)
      {
        this.getempinfo=this.emp[i];
       
        this.msg="Data Edited"
      }
    }
  }
  updateEmployee()
  {
      let k = this.getempinfo.eid;
      for(let i=0;i<this.emp.length;i++)
      {
        if(this.emp[i].eid==k)
        {
          this.emp[i]=this.getempinfo;
          this.getempinfo={};
          this.msg="Record updates!!!"
        }
      }

  }
}
