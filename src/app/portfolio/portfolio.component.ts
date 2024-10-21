import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../shared/products.model';
import {product} from '../shared/products';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  // products: ProductModel[] = product;

  array :any = {};

ngOnInit(): void {
  product.forEach(val=>{
    if(!this.array.hasOwnProperty(val.categoryName)){
      this.array[val.categoryName] = val.img
    }
  })
  console.log(this.array);
  
}


}
