import { Component, HostListener } from '@angular/core';  // HostListener importieren

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Korrigiere 'styleUrl' zu 'styleUrls'
})
export class AppComponent {
  title = 'Codefactory_Project_Group_5';

  showScroll: boolean = false;
  showScrollHeight = 300;  // Höhe, ab der der Button sichtbar ist
  hideScrollHeight = 10;   // Höhe, ab der der Button wieder verschwindet

  // Achte darauf, dass HostListener korrekt importiert ist
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    if (yOffset > this.showScrollHeight) {
      this.showScroll = true;
    } else if (this.showScroll && yOffset < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
