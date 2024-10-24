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



  ngOnInit() {
    let test : any = this.route.snapshot.routeConfig?.path;
    if (test =='home') {
      this.heroName = 'Home';
      
    } else if (test == 'portfolio') {
      this.heroName = 'Portfolio';
    } else if (test == 'bio') {
      this.heroName = 'About Me';
    } else if (test == 'contact') {
      this.heroName = 'Contact';
    } else if (test =='details') {
      this.heroName = 'Details';
    } else {
      this.heroName = 'photographer out of passion';
    }
    //  this.heroName = this.route.snapshot.routeConfig?.path
  }
}
