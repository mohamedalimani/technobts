import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
    {path:'projects', loadChildren:()=>import('./realisations/realisations.module').then((m)=>m.RealisationsModule)},
    {path:'contact', loadComponent:()=>import('./contact/contact.component').then(m=>m.ContactComponent)},
    {path:'references', loadComponent:()=>import('./references/references.component').then(m=>m.ReferencesComponent)},
    {path:'speciality', loadChildren:()=>import('./speciality/speciality.module').then((m)=>m.SpecialityModule)},
    {path:'main', loadChildren:()=>import('./main/main.module').then((m)=>m.MainModule)},
    {path:'**', redirectTo:''}
];
