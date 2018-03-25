import { Component, OnInit } from "@angular/core";
import { EventsService } from "../shared/events.service";
import { Router } from "@angular/router";


@Component(
  {
      templateUrl:'app/events/create-event.component.html',
      styles:[".error em{color:red;float:right;}",".error input{background-color:red}"]
  }
)
export class CreateEventComponent implements OnInit{
    isDirty:boolean = true;
    event:any;

    constructor(private eventService:EventsService,private router:Router){

    }

    ngOnInit(){
      this.event={
          name:'Ng conf  2',
          date:'01/01/2018',
          time:'10:00 AM',
          price:12,
          location:{
            address:'place',
            city:'hyd',
            country:'India'
          },
          imageUrl:'https://pespespes.files.wordpress.com/2013/07/fc-barcelona.png'
      };
    }
    
    saveEvent(formValues){
      this.eventService.saveEvent(this.event);
      this.router.navigate(['events']);
    }
}