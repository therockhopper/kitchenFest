import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class EventsService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Fetch all the videos
   */
  getAllEventsVideos(): any {
    return this.http.get('/api/all')
      .map(res => res )
  }

}
