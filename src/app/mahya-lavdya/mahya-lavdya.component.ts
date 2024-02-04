import { Component } from '@angular/core';

@Component({
  selector: 'app-mahya-lavdya',
  templateUrl: './mahya-lavdya.component.html',
  styleUrls: ['./mahya-lavdya.component.css']
})
export class MahyaLavdyaComponent {
  namesearch:string='';
  productarr = [
    {
      SrNo: 1,
      name: 'Samsung',
      price: 18000,
      product: 'Available'
    },
    {
      SrNo: 2,
      name: 'Nokia',
      price: 1800,
      product: 'Not Available'
    },
    {
      SrNo: 3,
      name: 'One+',
      price: 32000,
      product: ' Available'
    },
    {
      SrNo: 4,
      name: 'Redmi',
      price: 15000,
      product: 'Not Available'
    },
    {
      SrNo: 5,
      name: 'tv',
      price: 21000,
      product: ' Available'
    },
    {
      SrNo: 6,
      name: 'Bike',
      price: 61000,
      product: ' Available'
    },
    {
      SrNo: 7,
      name: 'car',
      price: 500000,
      product: ' Available'
    },
    {
      SrNo: 8,
      name: 'Laptop',
      price:42000,
      product: 'Not Available'
    }
  ]
}
