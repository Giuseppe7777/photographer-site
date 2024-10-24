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
  this.triggerAnimations();
}

triggerAnimations(): void {
  setTimeout(() => {
    const animatedElements = document.querySelectorAll('.animated-text, .animated-scale');
    animatedElements.forEach((el: Element) => {
      el.classList.add('animated-text-visible', 'animated-scale-visible');
    });
  }, 100);  
}


}


