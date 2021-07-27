import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  WelcomeMsg()
  {
    debugger;
    alert("Good Morning");
  }
//Eg2
  fname="name";

  displayFullName(name:HTMLInputElement)
  {
    this.fname=name.value+"Sai";
  }

  //Eg3
  calbonus=0;

  displayBonus(sal:HTMLInputElement)
  {
    this.calbonus=parseInt(sal.value)+1000;
  }


}
