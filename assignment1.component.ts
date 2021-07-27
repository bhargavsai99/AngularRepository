import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }

  cars : any[] = [
    {'picture' : "assets/images/lamborghini.jpg",'name' :'Lamborghini'},
    {'picture' : "assets/images/Ferrari.jpg",'name' :'Ferrari'},
    {'picture' : "assets/images/mercedes.jpg",'name' :'Mercedes'},
    {'picture' : "assets/images/bmw.jpg",'name' :'BMW'},
    {'picture' : "assets/images/astonmartin.jpg",'name' :'Aston Martin'},

  ]

  ngOnInit(): void {
  }

}
