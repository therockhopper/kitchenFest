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
      id: 1,
      title: "My Movie",
      description: "The best movie"
    },
    {
      id: 1,
      title: "Not my Movie",
      description: "The best movie"
    },
    {
      id: 1,
      title: "My Movie",
      description: "The best movie"
    },
  ]

  videos: any[]

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.eventsService.getAllEventsVideos()
      .subscribe(
        res => {
          this.videos = res.data
          console.log(this.videos)
        }
      )
  }

}
