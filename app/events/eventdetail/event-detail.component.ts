import { Component, OnInit } from "@angular/core";
import { EventsService } from "../../shared/events.service";


@Component({
    templateUrl:'app/events/eventdetail/event-detail.component.html',
    styles:[`
    .container:{padding-left:20px;padding-right:20px}
    .event-image{height:100px}
    `]
})
export class EventDetailComponent implements OnInit{
  public event:any;

  constructor(private eventService:EventsService){}

  ngOnInit(){
      this.event= this.eventService.getEvent(1);
  }
}