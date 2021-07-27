import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamplePipes';
  todaydate?:Date;

  products?:any[] 
  p:any={};

  searchText?:any;
  ngOnInit()
  {
    this.todaydate=new Date();
    this.products=[
    {id:1,pname:"Pen",price:10},
    {id:2,pname:"paper",price:5},
    {id:3,pname:"note",price:15}

    ];
  }
}
