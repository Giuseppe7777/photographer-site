import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.checkScroll(); // Check scroll position on initialization
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll(); // Trigger check on every scroll
  }

  checkScroll(): void {
    const animatedElements = document.querySelectorAll('.animated-text, .animated-scale');
    animatedElements.forEach((el: Element) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100 && rect.bottom >= 0) {
        // Add classes when the element is in the viewport
        el.classList.add('animated-text-visible', 'animated-scale-visible');
      } else {
        // Remove classes when the element is outside the viewport
        el.classList.remove('animated-text-visible', 'animated-scale-visible');
      }
    });
  }
}
