import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';

const routes:Routes=[
  {path:'', component:ProjectsComponent},
  {path:':id', component:ProjectComponent},
]

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), RouterLink
  ]
})
export class RealisationsModule { }
