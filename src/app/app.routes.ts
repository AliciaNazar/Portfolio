import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    { path: "**", redirectTo: "" },
    // { path: "contacto", component:ContactoComponent },
];
