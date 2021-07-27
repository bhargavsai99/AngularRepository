import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  employee:any[]=[
    {"name":"SIBI","age":"20","dept":"HR"},
    {"name":"Raj","age":"20","dept":"Bank"},
    {"name":"Abi","age":"20","dept":"Civil"},
    {"name":"Banu","age":"20","dept":"CSE"},
    {"name":"Rekha","age":"20","dept":"UI"}
  ]

  Cars:any[]=[
    {"name":"Benz","Color":"Red"},
    {"name":"Audi","Color":"Blue"},
    {"name":"RangeRover","Color":"Green"},
    {"name":"Hundai","Color":"Black"},
    {"name":"Tata","Color":"White"}
  ]

  ngOnInit(): void {
  }

}
