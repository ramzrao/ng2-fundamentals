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

@NgModule({
    imports:[BrowserModule,RouterModule.forRoot(routes)],
    declarations:[EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComponent
],
    bootstrap:[EventsAppComponent],
    providers:[EventsService]
})
export class AppModule{

}