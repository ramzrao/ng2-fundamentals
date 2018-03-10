import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventsService } from "./events.service";


@Injectable()
export class EventResolveService implements Resolve<any>{
    constructor(private eventService:EventsService)
    {

    }
    resolve()
    {
        return this.eventService.getEvents().asObservable().map(events=>events);
    }
}