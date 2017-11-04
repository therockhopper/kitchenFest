import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';

import { EventsService } from './events.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

const appRoutes:Routes = [ 
  { 
    path: 'home', 
    loadChildren: 'app/home/home.module#HomeModule' 
  },
  {
    path: 'event',
    loadChildren: 'app/event/event.module#EventModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpClientModule,
    HomeModule,
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
