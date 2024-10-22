import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../shared/products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  category : any;
  array : any = [];

  constructor(private route:ActivatedRoute){
    this.category = this.route.snapshot.params["catagory"];
    this.array = product.filter(item=>item.categoryName == this.category)
    console.log(this.array);
    
  }
}
