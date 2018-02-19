import {Routes} from '@angular/router'
import { EventDetailComponent } from './events/eventdetail/event-detail.component';
import { EventsListComponent } from './events/events-list.component';


export const routes:Routes = [
    {path:'events' ,component:EventsListComponent},
    {path:'event' ,component:EventsListComponent},
    {path:'',redirectTo:'events',pathMatch:'full'}
];