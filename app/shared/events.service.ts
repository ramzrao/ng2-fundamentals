import { Injectable } from "@angular/core";


@Injectable()
export class EventsService{
    constructor(){

    }
   getEvents(){
       return EVENTS;
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
 id:1,
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
 id:1,
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
 id:1,
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