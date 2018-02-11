import { Component, OnInit } from "@angular/core";
import { EventsService } from "../shared/events.service";



@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit{
   public events:any;
   constructor(private eventsService:EventsService)
   {

   }

    ngOnInit(){
        this.events=this.eventsService.getEvents();
    }

   handleEventClicked(data){
       console.log(data);
   }
}