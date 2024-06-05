import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {'path':'','title':'Home', component:HomeComponent},
    {'path':'services','title':'Service',component:ServicesComponent},
    {'path':'contact', 'title':'Contact',component:ContactComponent},
    {'path':'about', 'title':'About',component:AboutComponent},
    {'path':'**','title':'404',component:PagenotfoundComponent}
];
