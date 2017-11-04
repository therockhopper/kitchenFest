import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../events.service';

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

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.eventsService.getAllEventsVideos()
      .subscribe(
        res => {
          console.log(res)
        }
      )
  }

}
