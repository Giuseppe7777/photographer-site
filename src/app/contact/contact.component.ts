

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
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

