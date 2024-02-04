export class Product{


    image:string;
    ProductName:string;
    Price:number;
    id:any;
    count:number
    constructor( image:string,ProductName:string,Price:number,id:any,count:number){
        this.image=image,
        this.ProductName=ProductName,
        this.Price=Price
        this.id=id
        this.count=count
    }
}