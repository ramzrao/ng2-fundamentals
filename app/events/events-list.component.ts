import { Component, OnInit } from "@angular/core";
import { EventsService } from "../shared/events.service";
import { ActivatedRoute } from "@angular/router";



@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit{
   public events:any;
   constructor(private eventsService:EventsService,private router:ActivatedRoute)
   {

   }

    ngOnInit(){
        this.events = this.router.snapshot.data['events'];
    }

   handleEventClicked(data){
       console.log(data);
   }
}