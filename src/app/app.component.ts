import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  videos: any[] = [
    {title: "My Movie"},
    {title: "Not my Movie"},
    {title: "My Movie"},
  ]
}
