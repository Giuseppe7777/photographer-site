import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../shared/products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  catagory : any;
  array : any = [];

  constructor(private route:ActivatedRoute){
    this.catagory = this.route.snapshot.params["catagory"];
    this.array = product.filter(item=>item.categoryName == this.catagory)
    console.log(this.array);
    
  }
}
