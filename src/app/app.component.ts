import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kitchen Fest';

  videos: any[] = [
    {title: "My Movie"},
    {title: "Not my Movie"},
  ]
}
