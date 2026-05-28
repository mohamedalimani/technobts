import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

const routes:Routes=[
  {path:'', component:HomeComponent}
]

@NgModule({
  declarations: [HomeComponent, FaqComponent],
  imports: [
    CommonModule, RouterLink, RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
