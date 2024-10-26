import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:"details/:category", 
    component : DetailsComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// export class AppRoutingModule { }
// imports: [RouterModule.forRoot(routes, { get scrollPositionRestoration() {
//   const params = new URLSearchParams(window.location.search);
//   console.log(params.get(""))
//   if (params.get('portfolio') || params.get('details')) {
//     return 'disabled' as const;
//   }
//   return 'enabled' as const;
// }, })],
// exports: [RouterModule]