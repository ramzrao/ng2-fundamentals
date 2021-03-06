import { Injectable } from "@angular/core";
import { Subject } from "rxjs/RX";


@Injectable()
export class EventsService{
    constructor(){

    }
   getEvents(){
      let subject = new Subject();
      setTimeout(()=>{subject.next(EVENTS);subject.complete();},2000);
      return subject;
   }
   getEvent(id:number){
      return EVENTS.filter(m=>m.id==id)[0];
   }
   saveEvent(event){
     event.id=999;
     EVENTS.push(event);
   }
}
const EVENTS = [{
    id:1,
    name:'Angular Connect',
    date:'2/10/2019',
    time:"10:00 Am",
    price:599.99,
    imageUrl:'/app/assets/images/angularconnect-sheild.png',
    location:{
        address:'107 DT',
        city:'London',
        Country:'England'
    }
},
{
 id:2,
 name:'ng Connect',
 date:'2/10/2019',
 time:"10:00 Am",
 price:599.99,
 imageUrl:'/app/assets/images/angularconnect-sheild.png',
 location:{
     address:'107 DT',
     city:'London',
     Country:'England'
 }
},
{
 id:3,
 name:'You Connect',
 date:'2/10/2019',
 time:"10:00 Am",
 price:599.99,
 imageUrl:'/app/assets/images/angularconnect-sheild.png',
 location:{
     address:'107 DT',
     city:'London',
     Country:'England'
 }
},
{
 id:4,
 name:'Me Connect',
 date:'2/10/2019',
 time:"10:00 Am",
 price:599.99,
 imageUrl:'/app/assets/images/angularconnect-sheild.png',
 location:{
     address:'107 DT',
     city:'London',
     Country:'England'
 }
}
];