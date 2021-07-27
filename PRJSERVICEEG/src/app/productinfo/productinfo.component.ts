import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  constructor(private pser:ProductService,private route:ActivatedRoute) { }

  pid?: any;
  
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>
    { 
      this.pid=(this.route.snapshot.params.id)

    });

    this.getSelectedProduct();
  }

  selectedpro: any;
  getSelectedProduct()
  {
    this.selectedpro=this.pser.getProductInfo(this.route.snapshot.params.id);

  }
}
