import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path:'info',
        component:InfoComponent
      },
      {
        path: 'contact',
        component: ContactComponent,
      }
];
