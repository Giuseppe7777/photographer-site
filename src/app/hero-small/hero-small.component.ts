import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-small',
  templateUrl: './hero-small.component.html',
  styleUrls: ['./hero-small.component.css'] 
})
export class HeroSmallComponent implements OnInit {
  heroName: any = ''; 

  constructor(private router: Router ,private route : ActivatedRoute) {}

  
  updateHeroText(url: string) {
    if (url.includes('/home')) {
      this.heroName = 'Home';
      
    } else if (url.includes('/portfolio')) {
      this.heroName = 'Portfolio';
    } else if (url.includes('/bio')) {
      this.heroName = 'About Me';
    } else if (url.includes('/contact')) {
      this.heroName = 'Contact';
    } else if (url.includes('/details')) {
      this.heroName = 'Details';
    } else {
      this.heroName = 'photographer out of passion';
    }
  }

  ngOnInit() {
      
      
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.updateHeroText(event.urlAfterRedirects); 
    //   }
    // });
    console.log(this.route.snapshot.routeConfig);
    
     this.heroName = this.route.snapshot.routeConfig?.path
  }
}
