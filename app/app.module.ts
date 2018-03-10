import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventsService } from "./shared/events.service";
import { EventDetailComponent } from "./events/eventdetail/event-detail.component";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./events/error.component";
import { EventGuardService } from "./shared/event-guard.service";
import { EventResolveService } from "./shared/event-resolve.service";

@NgModule({
    imports:[BrowserModule,RouterModule.forRoot(routes)],
    declarations:[EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
],
    bootstrap:[EventsAppComponent],
    providers:[
        EventsService,
        EventGuardService,
        EventResolveService,
        {
            provide:'DeactivateServiceCheck',
            useValue:checkDirty
        }
    
    ]
})
export class AppModule{

}

function checkDirty(component:CreateEventComponent)
{
  if(component.isDirty)
  {
      return window.confirm("You have not saved anything.")
  }
  return false;
}