import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../shared/card.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,AfterViewInit {
   constructor(private product:ProductService){}
   
   productObj:[]|any=[]
   ngOnInit(): void {
     this.productObj=this.product.ProductArray
   }
   tableArray:[]|any=[]
   totals:any
  updateObj:[]|any=[]
  updated:[]|any=[]
  filtered:[]|any=[]
   cardupdatedData(product:any):void{
       console.log(product)
       this.tableArray.push(product)
      console.log(this.updated)
       console.log(this.tableArray)
     let updatedObj=  this.tableArray.map((ele:any)=>{
        return{
          productname:ele.ProductName,
          prices:ele.Price,
          count:ele.count,
          ordertotal:ele.Price*ele.count,
          id:ele.id
        }
       })
       this.updateObj=updatedObj
    let newArray = [];
    let uniqueObject :any= {};
    for (let i in this.updateObj) {
        // Extract the title
        var objTitle:any= this.updateObj[i]['productname'];
        // Use the title as the index
         uniqueObject[objTitle] = this.updateObj[i];
    }
    // Loop to push unique object into array
    for (let i in uniqueObject) {
        newArray.push(uniqueObject[i]);
    }
    // Display the unique objects
    this.filtered=  newArray
       let table= this.filtered.map((ele:any)=>{
        return ele.ordertotal
       }).reduce((curent:any,next:any)=>{
          return curent+next
       })
       this.totals=table
   }
   ngAfterViewInit(): void {
   }
   Increments(pro:any):void{
    pro.count+=1
   }
   Decrements(pro:any){
    if(pro.count>1){ pro.count--}
   }
  
}
