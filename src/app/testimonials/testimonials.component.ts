import { Component, AfterViewInit } from '@angular/core';

declare var $: any;  

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $("#testimonial-slider").owlCarousel({
      items: 3, 
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1 
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  }
}
