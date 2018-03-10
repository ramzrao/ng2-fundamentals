import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { EventsService } from "./events.service";


@Injectable()
export class EventGuardService implements CanActivate{
    constructor(private router:Router,private eventService:EventsService){

    }
    canActivate(route:ActivatedRouteSnapshot){
        const eventExists  =  !!this.eventService.getEvent(+route.params['id']);
        if(!eventExists){
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}