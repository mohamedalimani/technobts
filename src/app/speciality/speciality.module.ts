import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ProtectionComponent } from './protection/protection.component';
import { RampeComponent } from './rampe/rampe.component';
import { DallageComponent } from './dallage/dallage.component';
import { BetonComponent } from './beton/beton.component';

const routes:Routes=[
  {path:'', component:ExpertiseComponent},
  {path:'dallage', component:DallageComponent},
  {path:'beton', component:BetonComponent},
  {path:'protection', component:ProtectionComponent},
  {path:'rampe', component:RampeComponent}
]

@NgModule({
  declarations: [DallageComponent, BetonComponent, RampeComponent, ExpertiseComponent, ProtectionComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), RouterLink
  ]
})
export class SpecialityModule { 
}
