import { Component, OnInit } from '@angular/core';
import { Department } from '../Model/department';
@Component({
  selector: 'app-departmentcrud',
  templateUrl: './departmentcrud.component.html',
  styleUrls: ['./departmentcrud.component.css']
})
export class DepartmentcrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Dept:Department[]=[
    {Did:101,Dname:"AI",DeptLocation:"Mumbai"},
    {Did:102,Dname:"UI",DeptLocation:"Hyderabad"},
    {Did:103,Dname:"BigData",DeptLocation:"Chennai"},
    {Did:104,Dname:"Accounts",DeptLocation:"Bangalore"},
    

  ];
  getDeptinfo:Department={};
  addDepartment()
  {
    debugger;
    this.Dept.push(this.getDeptinfo);
    this.getDeptinfo={};
  }
  msg="Error";
  deleteDepartment(Did?:number)
  {
    debugger;
    for(let i=0;i<this.Dept.length;i++)
    {
      if(this.Dept[i].Did==Did)
      {
        this.Dept.splice(i,1);
        this.msg="Record Deleted!!!";


      }
      else{
        this.msg="Record not Found";
      }
    }
  }

  EditDepartment(Did?:number)
  {
    for(let i=0;i<this.Dept.length;i++)
    {
      if(this.Dept[i].Did==Did)
      {
        this.getDeptinfo=this.Dept[i];
       
        this.msg="Data Edited"
      }
    }
  }
  updateDepartment()
  {
      let k = this.getDeptinfo.Did;
      for(let i=0;i<this.Dept.length;i++)
      {
        if(this.Dept[i].Did==k)
        {
          this.Dept[i]=this.getDeptinfo;
          this.getDeptinfo={};
          this.msg="Record updates!!!"
        }
      }

  }


}
