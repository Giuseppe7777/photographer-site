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
      loop: true,
      margin: 10,
      center: true, 
      responsive: {
        0: {
          items: 1 
        },
        600: {
          items: 3 
        },
        1000: {
          items: 5
        }
      }
    });
  }
}
