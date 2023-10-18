import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPagesComponent } from './main-pages/main-pages.component';

const routes: Routes = [
  {path:'', component:MainPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
