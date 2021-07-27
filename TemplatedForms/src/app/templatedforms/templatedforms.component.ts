import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Customer} from '../Model/customer';

@Component({
  selector: 'app-templatedforms',
  templateUrl: './templatedforms.component.html',
  styleUrls: ['./templatedforms.component.css']
})
export class TemplatedformsComponent implements OnInit {

  constructor() { }
  
  cust:Customer={};
  ngOnInit(): void {
  }
  onRegister(cformdata:NgForm)
  {
    console.log(cformdata.value),
    console.log(this.cust)
  }
}
