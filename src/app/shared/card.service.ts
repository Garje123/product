import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Product } from "./share.model";
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn:'root'
})

export class ProductService{
   public list: string|any;
   public gen() {
     console.log(typeof uuid());
     return  uuid()
   }
     ProductArray:[]|any=[
        new Product("https://c8.alamy.com/comp/EK1455/brown-sugar-EK1455.jpg","Brown Sugar" ,116,this.gen(),1),
        new Product("https://images.jdmagicbox.com/quickquotes/images_main/buttermilk-384197854-v6xp0.jpg","ButterMilk" ,15,this.gen(),1)
     ]

     getObjForm(obj:any){
        this.ProductArray.push(obj)
     }
}