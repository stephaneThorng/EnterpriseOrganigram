import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
  		appRoutes,
  		{ enableTracing: true }) // <-- debugging purposes only)
  	],
  exports: [RouterModule]
})
export class AppRoutingModule { }
