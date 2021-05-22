import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { BlogComponent }  from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* Add extra options for # routing on same page */
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
};

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'blog', component: BlogComponent, data: {animation: 'BlogPage'} },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)], //routerOptions added for # routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
