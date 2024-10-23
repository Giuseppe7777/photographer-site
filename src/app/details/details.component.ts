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
  currentSlide = 1;

  constructor(private route:ActivatedRoute){
    this.category = this.route.snapshot.params["category"];
    this.array = product.filter(item=>item.categoryName == this.category)
    console.log(this.array);
    setTimeout(()=>{
      this.nextSlide();
    }, 100)
    
  }

  showSlide(index: number): void {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    
    slides.forEach((slide: any) => {
      slide.style.display = 'none'; 
    });
    console.log(totalSlides);
    
    
    if (index >= totalSlides) {
      this.currentSlide = 0;
    } else if (index < 0) {
      this.currentSlide = totalSlides - 1;
    } else {
      this.currentSlide = index;
    }



    
    (slides[this.currentSlide] as HTMLElement).style.display = 'block';
  }

  
  nextSlide(): void {
    this.showSlide(this.currentSlide + 1);
  }

  
  prevSlide(): void {
    this.showSlide(this.currentSlide - 1);
  }

}
