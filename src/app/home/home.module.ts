import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

const homeRoutes:Routes = [
  {
    path: '',
    component: HomeComponent,
  }
] 

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
