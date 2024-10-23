import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit, OnInit {

  constructor() {}

  currentSlide = 0;

  ngAfterViewInit(): void {
    
    this.showSlide(this.currentSlide);
  }

  
  showSlide(index: number): void {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    
    slides.forEach((slide: any) => {
      slide.style.display = 'none'; 
    });

    
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

  ngOnInit(): void {
    this.checkScroll(); 
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll(); 
  }

  checkScroll(): void {
    const animatedElements = document.querySelectorAll('h1, .testimonial-info, .description');
    animatedElements.forEach((el: Element) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100 && rect.bottom >= 0) {
        
        el.classList.add('animated-text-visible', 'animated-scale-visible');
      } else {
        
        el.classList.remove('animated-text-visible', 'animated-scale-visible');
      }
    });
  }

}


