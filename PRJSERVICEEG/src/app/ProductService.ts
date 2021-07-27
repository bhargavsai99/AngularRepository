import { Injectable } from "@angular/core";
import { Product } from "./Model/product";
import { NgForm } from "@angular/forms";



@Injectable()

export class ProductService
{
    product:Product[];
    constructor()
    {
        this.product=[
            {pid:11,pname:'pencil',price:10,quantity:10,image:'assets/images/pencil.jpg',desc:'No discount'},
            {pid:12,pname:'Football',price:10,quantity:10,image:'assets/images/football.jpg',desc:'No discount'},
            {pid:13,pname:'Tennis ball',price:10,quantity:10,image:'assets/images/tennis.jpg',desc:'No discount'},
            {pid:14,pname:'Lunchbox',price:10,quantity:10,image:'assets/images/lunchbox.jpg',desc:'No discount'}
        ];
    }

    //fetch all products info
    getProducts()
    {
        return this.product;
    }
    
    //fetch the particular product details by passing pid
    getProductInfo(prodid: number)
    {
        let pinfo;
        this.product.forEach(ele=>{
            if(ele.pid==prodid)
            {
                pinfo=ele;
            }
        });
        return pinfo;
    }

    onAdd(product:Product)
    {
        this.product.push(product);
    }

    deleteProduct(pid:number)
    {
        this.product.forEach((element:any,index: number)=>{
            if(element.pid==pid)
            {
                this.product.splice(index,1);
                console.log("DELETED");
            }
        });
    }
}