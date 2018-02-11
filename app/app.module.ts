import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventsService } from "./shared/events.service";

@NgModule({
    imports:[BrowserModule],
    declarations:[EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
],
    bootstrap:[EventsAppComponent],
    providers:[EventsService]
})
export class AppModule{

}