import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: any[] = [
    {
      title: "My Movie",
      description: "The best movie"
    },
    {
      title: "Not my Movie",
      description: "The best movie"
    },
    {
      title: "My Movie",
      description: "The best movie"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
