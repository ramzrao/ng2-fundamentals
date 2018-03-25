import {Routes} from '@angular/router'
import { EventDetailComponent } from './events/eventdetail/event-detail.component';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './events/error.component';
import { EventGuardService } from './shared/event-guard.service';
import { EventResolveService } from './shared/event-resolve.service';
import { CreateSessionComponent } from './events/eventdetail/create-session.component';


export const routes:Routes = [
    {path:'createEvent',component:CreateEventComponent,canDeactivate:['DeactivateServiceCheck']},
    {path:'events/:id' ,component:EventDetailComponent,canActivate:[EventGuardService]},
    {path:'events' ,component:EventsListComponent,resolve:{events:EventResolveService}},
    {path:'events/session/new' ,component:CreateSessionComponent},
    {path:'404' ,component:Error404Component},
    {path:'user',loadChildren:'app/user/user.module#UserModule'},
    {path:'',redirectTo:'events',pathMatch:'full'},
];