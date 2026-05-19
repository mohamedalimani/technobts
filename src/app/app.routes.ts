import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
    {path:'projects', loadComponent:()=>import('./projects/projects.component').then(m=>m.ProjectsComponent)},
    {path:'project/:id', loadComponent:()=>import('./project/project.component').then(m=>m.ProjectComponent)},
    {path:'speciality', loadComponent:()=>import('./expertise/expertise.component').then(m=>m.ExpertiseComponent)},
    {path:'dallage', loadComponent:()=>import('./dallage/dallage.component').then(m=>m.DallageComponent)},
    {path:'beton', loadComponent:()=>import('./beton/beton.component').then(m=>m.BetonComponent)},
    {path:'rampe', loadComponent:()=>import('./rampe/rampe.component').then(m=>m.RampeComponent)},
    {path:'protection', loadComponent:()=>import('./protection/protection.component').then(m=>m.ProtectionComponent)},
    {path:'contact', loadComponent:()=>import('./contact/contact.component').then(m=>m.ContactComponent)},
    {path:'**', redirectTo:''}
];
